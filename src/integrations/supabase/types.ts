export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      btc_deposits: {
        Row: {
          amount: number
          btc_address: string
          created_at: string
          id: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          btc_address: string
          created_at?: string
          id?: string
          status: string
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          btc_address?: string
          created_at?: string
          id?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      conversations: {
        Row: {
          client_phone: string
          context: Json | null
          created_at: string
          id: string
          persona_id: string | null
          status: Database["public"]["Enums"]["conversation_status"] | null
          updated_at: string
        }
        Insert: {
          client_phone: string
          context?: Json | null
          created_at?: string
          id?: string
          persona_id?: string | null
          status?: Database["public"]["Enums"]["conversation_status"] | null
          updated_at?: string
        }
        Update: {
          client_phone?: string
          context?: Json | null
          created_at?: string
          id?: string
          persona_id?: string | null
          status?: Database["public"]["Enums"]["conversation_status"] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversations_persona_id_fkey"
            columns: ["persona_id"]
            isOneToOne: false
            referencedRelation: "personas"
            referencedColumns: ["id"]
          },
        ]
      }
      conversion_fees: {
        Row: {
          created_at: string
          fee_percentage: number
          from_currency: string
          id: string
          to_currency: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          fee_percentage: number
          from_currency: string
          id?: string
          to_currency: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          fee_percentage?: number
          from_currency?: string
          id?: string
          to_currency?: string
          updated_at?: string
        }
        Relationships: []
      }
      crypto_conversions: {
        Row: {
          created_at: string
          fee_amount: number
          from_amount: number
          from_currency: string
          id: string
          status: string
          to_amount: number
          to_currency: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          fee_amount: number
          from_amount: number
          from_currency: string
          id?: string
          status: string
          to_amount: number
          to_currency: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          fee_amount?: number
          from_amount?: number
          from_currency?: string
          id?: string
          status?: string
          to_amount?: number
          to_currency?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          conversation_id: string | null
          created_at: string
          id: string
          is_from_client: boolean
        }
        Insert: {
          content: string
          conversation_id?: string | null
          created_at?: string
          id?: string
          is_from_client: boolean
        }
        Update: {
          content?: string
          conversation_id?: string | null
          created_at?: string
          id?: string
          is_from_client?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      personas: {
        Row: {
          age: number | null
          avoid_words: string[] | null
          backstory: string | null
          blocked_numbers: string[] | null
          conversation_style: string | null
          created_at: string
          formality_level: string | null
          httpsms_api_key: string | null
          httpsms_phone: string | null
          id: string
          interests: string[] | null
          message_count: number | null
          name: string
          preferred_response_length: string | null
          preferred_words: string[] | null
          tone: string | null
          typical_phrases: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          age?: number | null
          avoid_words?: string[] | null
          backstory?: string | null
          blocked_numbers?: string[] | null
          conversation_style?: string | null
          created_at?: string
          formality_level?: string | null
          httpsms_api_key?: string | null
          httpsms_phone?: string | null
          id?: string
          interests?: string[] | null
          message_count?: number | null
          name: string
          preferred_response_length?: string | null
          preferred_words?: string[] | null
          tone?: string | null
          typical_phrases?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          age?: number | null
          avoid_words?: string[] | null
          backstory?: string | null
          blocked_numbers?: string[] | null
          conversation_style?: string | null
          created_at?: string
          formality_level?: string | null
          httpsms_api_key?: string | null
          httpsms_phone?: string | null
          id?: string
          interests?: string[] | null
          message_count?: number | null
          name?: string
          preferred_response_length?: string | null
          preferred_words?: string[] | null
          tone?: string | null
          typical_phrases?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      platform_settings: {
        Row: {
          btc_wallet_address: string
          created_at: string
          id: string
          ltc_wallet_address: string
          payment_provider: string
          provider_api_key: string | null
          updated_at: string
        }
        Insert: {
          btc_wallet_address: string
          created_at?: string
          id?: string
          ltc_wallet_address: string
          payment_provider: string
          provider_api_key?: string | null
          updated_at?: string
        }
        Update: {
          btc_wallet_address?: string
          created_at?: string
          id?: string
          ltc_wallet_address?: string
          payment_provider?: string
          provider_api_key?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      profile_settings: {
        Row: {
          chatbot_character: string | null
          chatbot_knowledge: string | null
          chatbot_style: string | null
          created_at: string
          description: string | null
          id: string
          is_description_locked: boolean | null
          is_rates_locked: boolean | null
          is_services_locked: boolean | null
          rates: Json | null
          services: Database["public"]["Enums"]["service_type"][] | null
          status: string | null
          updated_at: string
        }
        Insert: {
          chatbot_character?: string | null
          chatbot_knowledge?: string | null
          chatbot_style?: string | null
          created_at?: string
          description?: string | null
          id: string
          is_description_locked?: boolean | null
          is_rates_locked?: boolean | null
          is_services_locked?: boolean | null
          rates?: Json | null
          services?: Database["public"]["Enums"]["service_type"][] | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          chatbot_character?: string | null
          chatbot_knowledge?: string | null
          chatbot_style?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_description_locked?: boolean | null
          is_rates_locked?: boolean | null
          is_services_locked?: boolean | null
          rates?: Json | null
          services?: Database["public"]["Enums"]["service_type"][] | null
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan_type: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_type: string
          status: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_type?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      conversation_status: "active" | "archived" | "blocked"
      service_type:
        | "Travel"
        | "Dinner"
        | "Intimacy"
        | "Companionship"
        | "Fetish"
        | "BDSM"
        | "GFE"
        | "Role-play"
        | "Massage"
        | "Conversation"
        | "Dancing"
        | "Couples"
        | "Overnight"
        | "Fitness"
        | "Virtual"
        | "Party"
        | "Weekend"
        | "Shopping"
        | "Concerts"
        | "Outdoors"
        | "Wine"
        | "Culture"
        | "Education"
        | "Photography"
        | "Cooking"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
