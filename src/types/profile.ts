import { Database } from "@/integrations/supabase/types";

export type ServiceType = Database['public']['Enums']['service_type'];

export interface Rates {
  "30min": { incall: string; outcall: string };
  "1hour": { incall: string; outcall: string };
  overnight: { incall: string; outcall: string };
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
  "30min": { incall: "", outcall: "" },
  "1hour": { incall: "", outcall: "" },
  overnight: { incall: "", outcall: "" }
};