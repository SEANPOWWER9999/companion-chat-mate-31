import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { apiKey, userId } = await req.json();
    
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Get the webhook URL from environment variable or construct it
    const webhookUrl = `${Deno.env.get('SUPABASE_URL')}/functions/v1/sms-webhook`;
    console.log('Registering webhook URL:', webhookUrl);

    // Register webhook with httpSMS
    const response = await fetch('https://api.httpsms.com/v1/webhooks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({
        url: webhookUrl,
        events: ['message.received']
      }),
    });

    const result = await response.json();
    console.log('Webhook registration result:', result);

    // Update the persona record with webhook status
    const { error: updateError } = await supabase
      .from('personas')
      .update({ webhook_registered: true })
      .eq('user_id', userId);

    if (updateError) {
      throw updateError;
    }

    return new Response(
      JSON.stringify({ success: true, ...result }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );

  } catch (error) {
    console.error('Error registering webhook:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});