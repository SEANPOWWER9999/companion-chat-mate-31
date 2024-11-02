import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Initialize BTCPay connection (we'll use testnet for development)
const BTCPAY_URL = Deno.env.get('BTCPAY_URL')
const BTCPAY_API_KEY = Deno.env.get('BTCPAY_API_KEY')

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { amount, user_id } = await req.json()

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    const supabase = createClient(supabaseUrl!, supabaseKey!)

    // Generate new BTC address using BTCPay Server API
    const response = await fetch(`${BTCPAY_URL}/api/v1/stores/generate-address`, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${BTCPAY_API_KEY}`,
        'Content-Type': 'application/json',
      }
    })

    if (!response.ok) {
      throw new Error('Failed to generate BTC address')
    }

    const { address } = await response.json()

    // Store the deposit record
    const { data, error } = await supabase
      .from('btc_deposits')
      .insert({
        user_id,
        amount,
        btc_address: address,
        status: 'pending'
      })
      .select()
      .single()

    if (error) throw error

    return new Response(
      JSON.stringify({ 
        btc_address: address,
        deposit_id: data.id
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    console.error('Error:', error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400
      }
    )
  }
})