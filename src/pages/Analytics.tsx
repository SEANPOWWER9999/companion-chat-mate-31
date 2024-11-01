import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Analytics = () => {
  const [messageStats, setMessageStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: conversations } = await supabase
        .from("conversations")
        .select(`
          id,
          messages (count)
        `)
        .eq("persona_id", user.id);

      if (conversations) {
        const stats = conversations.map((conv: any) => ({
          conversation: conv.id.slice(0, 8),
          messages: conv.messages[0].count,
        }));
        setMessageStats(stats);
      }
    } catch (error) {
      console.error("Error loading analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
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
    </div>
  );
};

export default Analytics;