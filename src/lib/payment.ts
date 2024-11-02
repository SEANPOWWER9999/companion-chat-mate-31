import { supabase } from "@/integrations/supabase/client";

export async function generateBTCAddress(amount: number) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw userError;

  const { data, error } = await supabase.functions.invoke('generate-btc-address', {
    body: { amount, user_id: user.id },
  });

  if (error) throw error;
  return data;
}

export async function checkBTCDeposit(depositId: string) {
  const { data, error } = await supabase
    .from('btc_deposits')
    .select('*')
    .eq('id', depositId)
    .single();

  if (error) throw error;
  return data;
}