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

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { to, content, personaId } = await req.json() as SendSMSBody;

    // Get the persona's details including conversation preferences
    const { data: persona, error: personaError } = await supabase
      .from('personas')
      .select('*')
      .eq('id', personaId)
      .single();

    if (personaError || !persona) {
      console.error('Error fetching persona:', personaError);
      throw new Error('Persona not found or missing SMS credentials');
    }

    // Fetch conversation history
    const { data: conversation, error: convError } = await supabase
      .from('conversations')
      .select('id, context')
      .eq('persona_id', personaId)
      .eq('client_phone', to)
      .single();

    let conversationId = conversation?.id;
    let context = conversation?.context || {};

    if (!conversationId) {
      // Create new conversation if none exists
      const { data: newConv, error: createError } = await supabase
        .from('conversations')
        .insert({
          persona_id: personaId,
          client_phone: to,
          context: {},
          status: 'active'
        })
        .select()
        .single();

      if (createError) throw createError;
      conversationId = newConv.id;
      context = {};
    }

    // Fetch recent messages for context
    const { data: recentMessages } = await supabase
      .from('messages')
      .select('content, is_from_client, created_at')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: false })
      .limit(5);

    // Build conversation context
    const conversationHistory = recentMessages?.reverse().map(msg => ({
      role: msg.is_from_client ? "user" : "assistant",
      content: msg.content
    })) || [];

    // Apply persona settings to generate appropriate response
    let responseContent = content;
    if (persona.tone) {
      responseContent = adjustTone(responseContent, persona.tone);
    }

    if (persona.typical_phrases && persona.typical_phrases.length > 0) {
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
        content: responseContent
      }),
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
          message_count: (context.message_count || 0) + 1
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
        details: result.data
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

// Helper functions for text processing
function adjustTone(text: string, tone: string): string {
  // Simple tone adjustment based on persona settings
  switch (tone.toLowerCase()) {
    case 'professional':
      return text.replace(/hey/gi, 'hello').replace(/yeah/gi, 'yes');
    case 'casual':
      return text.replace(/hello/gi, 'hey').replace(/greetings/gi, 'hi');
    case 'friendly':
      return `${text} 😊`;
    default:
      return text;
  }
}

function incorporateTypicalPhrases(text: string, phrases: string[]): string {
  // Randomly select and incorporate a typical phrase if appropriate
  if (Math.random() > 0.7 && phrases.length > 0) {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return `${text} ${randomPhrase}`;
  }
  return text;
}

function adjustFormality(text: string, formalityLevel: string): string {
  switch (formalityLevel.toLowerCase()) {
    case 'formal':
      return text
        .replace(/don't/gi, 'do not')
        .replace(/won't/gi, 'will not')
        .replace(/can't/gi, 'cannot');
    case 'informal':
      return text
        .replace(/do not/gi, "don't")
        .replace(/will not/gi, "won't")
        .replace(/cannot/gi, "can't");
    default:
      return text;
  }
}