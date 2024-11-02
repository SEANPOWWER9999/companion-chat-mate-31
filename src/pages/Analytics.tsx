import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { MessageThread } from "@/types/messageThread";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const Analytics = () => {
  const [messageStats, setMessageStats] = useState<any[]>([]);
  const [messageThreads, setMessageThreads] = useState<MessageThread[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Get message statistics
      const { data: conversations } = await supabase
        .from("conversations")
        .select(`
          id,
          messages (count),
          persona:personas (name)
        `)
        .eq("persona_id", user.id);

      if (conversations) {
        const stats = conversations.map((conv: any) => ({
          conversation: conv.persona?.name || conv.id.slice(0, 8),
          messages: conv.messages[0].count,
        }));
        setMessageStats(stats);
      }

      // Get message threads from httpSMS API via our edge function
      const { data: persona } = await supabase
        .from("personas")
        .select("id")
        .eq("user_id", user.id)
        .single();

      if (persona) {
        const { data: threadsResponse, error: threadsError } = await supabase.functions.invoke(
          'get-message-history',
          {
            body: { personaId: persona.id }
          }
        );

        if (threadsError) throw threadsError;
        setMessageThreads(threadsResponse.threads || []);
      }

    } catch (error: any) {
      toast({
        title: "Error loading analytics",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Message Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={messageStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="conversation" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="messages" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Message Threads</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Contact</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Message</TableHead>
                  <TableHead>Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {messageThreads.map((thread) => (
                  <TableRow key={thread.id}>
                    <TableCell>{thread.contact}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        thread.status === 'received' ? 'bg-green-100 text-green-800' : 
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {thread.status}
                      </span>
                    </TableCell>
                    <TableCell className="max-w-md truncate">
                      {thread.last_message_content}
                    </TableCell>
                    <TableCell>
                      {new Date(thread.updated_at).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;