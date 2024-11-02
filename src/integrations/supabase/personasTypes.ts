export type Persona = {
  id: string;
  user_id: string;
  name: string;
  age?: number | null;
  tone?: string | null;
  typical_phrases?: string[] | null;
  conversation_style?: string | null;
  interests?: string[] | null;
  backstory?: string | null;
  preferred_response_length?: string | null;
  formality_level?: string | null;
  avoid_words?: string[] | null;
  preferred_words?: string[] | null;
  created_at: string;
  updated_at: string;
  httpsms_api_key?: string | null; // New field
  httpsms_phone?: string | null; // New field
};