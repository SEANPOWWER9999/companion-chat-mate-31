import { Database } from "@/integrations/supabase/types";

export type ServiceType = Database['public']['Enums']['service_type'];

export type Rates = {
  "30min": { incall: string | null; outcall: string | null };
  "1hour": { incall: string | null; outcall: string | null };
  overnight: { incall: string | null; outcall: string | null };
}

export interface ProfileState {
  status: string;
  description: string;
  rates: Rates;
  services: ServiceType[];
  is_description_locked: boolean;
  is_rates_locked: boolean;
  is_services_locked: boolean;
  chatbot_character: string;
  chatbot_knowledge: string;
  chatbot_style: string;
}

export const defaultRates: Rates = {
  "30min": { incall: null, outcall: null },
  "1hour": { incall: null, outcall: null },
  overnight: { incall: null, outcall: null }
};