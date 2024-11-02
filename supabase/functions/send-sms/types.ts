export interface SendSMSBody {
  to: string;
  content: string;
  personaId: string;
  threadId?: string;
}

export interface MessageThread {
  id: string;
  owner: string;
  contact: string;
  is_archived: boolean;
  user_id: string;
  color: string;
  status: string;
  last_message_content: string;
  last_message_id: string;
  created_at: string;
  updated_at: string;
  order_timestamp: string;
}

export interface ConversationContext {
  last_interaction: string;
  message_count: number;
  thread_id?: string;
}