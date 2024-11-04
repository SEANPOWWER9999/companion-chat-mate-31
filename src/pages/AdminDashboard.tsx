import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { 
  Users, 
  Brain, 
  BarChart3, 
  Bell, 
  Shield 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdminMetricsCard } from "@/components/admin/AdminMetricsCard";
import { UserManagementTable } from "@/components/admin/UserManagementTable";
import { TrainersList } from "@/components/admin/TrainersList";
import { ChatbotInsights } from "@/components/admin/ChatbotInsights";
import { NotificationPanel } from "@/components/admin/NotificationPanel";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [metrics, setMetrics] = useState({
    totalUsers: 0,
    activeTrainers: 0,
    totalConversations: 0,
    averageAccuracy: 0,
  });

  useEffect(() => {
    const checkAdminAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login");
        return;
      }
      // Check if user has admin role
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();
      
      if (profile?.role !== "admin") {
        navigate("/");
      }
      setIsLoading(false);
    };

    checkAdminAuth();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gradient">Admin Dashboard</h1>
            <Button
              onClick={() => navigate("/training")}
              className="bg-gradient-hotbot text-white"
            >
              Go to Training
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AdminMetricsCard
              title="Total Users"
              value={metrics.totalUsers}
              icon={Users}
              trend="+12%"
            />
            <AdminMetricsCard
              title="Active Trainers"
              value={metrics.activeTrainers}
              icon={Brain}
              trend="+5%"
            />
            <AdminMetricsCard
              title="Total Conversations"
              value={metrics.totalConversations}
              icon={BarChart3}
              trend="+28%"
            />
            <AdminMetricsCard
              title="Response Accuracy"
              value={`${metrics.averageAccuracy}%`}
              icon={Shield}
              trend="+3%"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <UserManagementTable />
            </div>
            <div>
              <NotificationPanel />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TrainersList />
            <ChatbotInsights />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;