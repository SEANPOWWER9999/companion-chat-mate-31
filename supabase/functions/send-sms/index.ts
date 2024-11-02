import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { SendSMSBody, MessageThread, ConversationContext } from './types.ts';
import { adjustTone, incorporateTypicalPhrases, adjustFormality } from './textProcessing.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { to, content, personaId, threadId } = await req.json() as SendSMSBody;

    // Get the persona's details
    const { data: persona, error: personaError } = await supabase
      .from('personas')
      .select('*')
      .eq('id', personaId)
      .single();

    if (personaError || !persona) {
      throw new Error('Persona not found or missing SMS credentials');
    }

    // Get or create conversation with thread ID
    const { data: conversation, error: convError } = await supabase
      .from('conversations')
      .select('id, context')
      .eq('persona_id', personaId)
      .eq('client_phone', to)
      .single();

    let conversationId = conversation?.id;
    let context: ConversationContext = conversation?.context || {
      last_interaction: new Date().toISOString(),
      message_count: 0,
      thread_id: threadId
    };

    if (!conversationId) {
      const { data: newConv, error: createError } = await supabase
        .from('conversations')
        .insert({
          persona_id: personaId,
          client_phone: to,
          context: {
            last_interaction: new Date().toISOString(),
            message_count: 0,
            thread_id: threadId
          },
          status: 'active'
        })
        .select()
        .single();

      if (createError) throw createError;
      conversationId = newConv.id;
    }

    // Get recent messages for context
    const { data: recentMessages } = await supabase
      .from('messages')
      .select('content, is_from_client, created_at')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: false })
      .limit(5);

    // Process message with persona settings
    let responseContent = content;
    if (persona.tone) {
      responseContent = adjustTone(responseContent, persona.tone);
    }
    if (persona.typical_phrases?.length) {
      responseContent = incorporateTypicalPhrases(responseContent, persona.typical_phrases);
    }
    if (persona.formality_level) {
      responseContent = adjustFormality(responseContent, persona.formality_level);
    }

    // Send message using httpSMS API
    const response = await fetch('https://api.httpsms.com/v1/messages/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': persona.httpsms_api_key,
      },
      body: JSON.stringify({
        from: persona.httpsms_phone,
        to,
        content: responseContent,
        thread_id: threadId // Include thread ID in the API call
      }),
    });

    const result = await response.json();
    console.log('httpSMS API response:', result);

    if (response.status !== 200) {
      throw new Error(`httpSMS API error: ${result.message || 'Unknown error'}`);
    }

    // Store message in database
    const { error: messageError } = await supabase
      .from('messages')
      .insert({
        content: responseContent,
        is_from_client: false,
        conversation_id: conversationId,
      });

    if (messageError) {
      console.error('Error storing message:', messageError);
    }

    // Update conversation context
    const { error: updateError } = await supabase
      .from('conversations')
      .update({ 
        context: {
          ...context,
          last_interaction: new Date().toISOString(),
          message_count: (context.message_count || 0) + 1,
          thread_id: threadId
        }
      })
      .eq('id', conversationId);

    if (updateError) {
      console.error('Error updating conversation context:', updateError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        messageId: result.data.id,
        status: result.status,
        details: result.data,
        threadId
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error sending SMS:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});