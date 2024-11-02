import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SendSMSBody {
  to: string;
  content: string;
  personaId: string;
  scheduled_send_time?: string;
  sim?: "SIM1" | "SIM2";
  request_id?: string;
  color?: "yellow" | "green" | "brown" | "pink" | "purple" | "cyan";
  is_archived?: boolean;
}

interface MessageThread {
  id: string;
  owner: string;
  contact: string;
  is_archived: boolean;
  color: string;
  status: string;
  last_message_content: string;
  last_message_id: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { to, content, personaId, scheduled_send_time, sim, request_id, color, is_archived } = await req.json() as SendSMSBody;

    // Get the persona's API key and phone number
    const { data: persona, error: personaError } = await supabase
      .from('personas')
      .select('httpsms_api_key, httpsms_phone')
      .eq('id', personaId)
      .single();

    if (personaError || !persona) {
      console.error('Error fetching persona:', personaError);
      return new Response(
        JSON.stringify({ error: 'Persona not found or missing SMS credentials' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 404 
        }
      );
    }

    if (!persona.httpsms_api_key || !persona.httpsms_phone) {
      return new Response(
        JSON.stringify({ error: 'SMS credentials not configured' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      );
    }

    // First, check if a thread exists
    const threadResponse = await fetch('https://api.httpsms.com/v1/message-threads', {
      headers: {
        'Accept': 'application/json',
        'x-api-key': persona.httpsms_api_key,
      },
    });

    const threads = await threadResponse.json();
    let existingThread = threads.data?.find((t: MessageThread) => t.contact === to);

    // Prepare the payload with all possible options
    const payload: any = {
      from: persona.httpsms_phone,
      to,
      content,
    };

    // Add optional parameters if they're provided
    if (scheduled_send_time) payload.scheduled_send_time = scheduled_send_time;
    if (sim) payload.sim = sim;
    if (request_id) payload.request_id = request_id;
    if (color && !existingThread) payload.color = color;
    if (typeof is_archived !== 'undefined') payload.is_archived = is_archived;

    console.log('Sending SMS with payload:', payload);

    // Send SMS using httpSMS API
    const response = await fetch('https://api.httpsms.com/v1/messages/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': persona.httpsms_api_key,
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    console.log('httpSMS API response:', result);

    if (response.status !== 200) {
      throw new Error(`httpSMS API error: ${result.message || 'Unknown error'}`);
    }

    // Store the message in our database
    const { error: messageError } = await supabase
      .from('messages')
      .insert({
        content,
        is_from_client: false,
        conversation_id: null, // You might want to pass this in the request if needed
      });

    if (messageError) {
      console.error('Error storing message:', messageError);
    }

    // If this is a new thread, update thread properties
    if (existingThread && (color || typeof is_archived !== 'undefined')) {
      const updatePayload: any = {};
      if (color) updatePayload.color = color;
      if (typeof is_archived !== 'undefined') updatePayload.is_archived = is_archived;

      await fetch(`https://api.httpsms.com/v1/message-threads/${existingThread.id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': persona.httpsms_api_key,
        },
        body: JSON.stringify(updatePayload),
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        messageId: result.data.id,
        status: result.status,
        details: result.data,
        threadId: existingThread?.id
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error sending SMS:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});