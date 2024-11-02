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