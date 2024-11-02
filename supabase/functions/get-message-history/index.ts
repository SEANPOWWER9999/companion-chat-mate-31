import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface GetMessagesBody {
  personaId: string;
  phoneNumber?: string;
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

    const { personaId, phoneNumber } = await req.json() as GetMessagesBody;

    // Get the persona's API key
    const { data: persona, error: personaError } = await supabase
      .from('personas')
      .select('httpsms_api_key, httpsms_phone')
      .eq('id', personaId)
      .single();

    if (personaError || !persona) {
      console.error('Error fetching persona:', personaError);
      throw new Error('Persona not found or missing SMS credentials');
    }

    // Fetch message threads from httpSMS API
    const response = await fetch('https://api.httpsms.com/v1/message-threads', {
      headers: {
        'Accept': 'application/json',
        'x-api-key': persona.httpsms_api_key,
      },
    });

    const threads = await response.json();
    console.log('Fetched message threads:', threads);

    // If a specific phone number is provided, filter for that thread
    if (phoneNumber) {
      const specificThread = threads.data?.find((t: any) => t.contact === phoneNumber);
      
      if (specificThread) {
        // Fetch detailed messages for this thread
        const messagesResponse = await fetch(`https://api.httpsms.com/v1/messages?thread_id=${specificThread.id}`, {
          headers: {
            'Accept': 'application/json',
            'x-api-key': persona.httpsms_api_key,
          },
        });
        
        const messages = await messagesResponse.json();
        console.log('Fetched specific thread messages:', messages);

        return new Response(
          JSON.stringify({
            thread: specificThread,
            messages: messages.data,
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: 'No messages found for this number' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 404
        }
      );
    }

    // Return all threads if no specific number is provided
    return new Response(
      JSON.stringify({ threads: threads.data }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error fetching message history:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});