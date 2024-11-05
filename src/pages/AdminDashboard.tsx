import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Users, Brain, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdminMetricsCard } from "@/components/admin/AdminMetricsCard";
import { UserManagementTable } from "@/components/admin/UserManagementTable";
import { TrainersList } from "@/components/admin/TrainersList";
import { ChatbotInsights } from "@/components/admin/ChatbotInsights";
import { NotificationPanel } from "@/components/admin/NotificationPanel";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [metrics, setMetrics] = useState({
    totalUsers: 0,
    activeTrainers: 0,
    totalConversations: 0,
    averageAccuracy: 0,
  });

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data: { user }, error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password,
      });

      if (error) throw error;

      // Check if user has admin role
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (profile?.role === "admin") {
        setIsAuthenticated(true);
        toast({
          title: "Welcome Admin! 👋",
          description: "Successfully logged in to admin dashboard",
        });
      } else {
        throw new Error("Unauthorized access");
      }
    } catch (error: any) {
      toast({
        title: "Access Denied ⚠️",
        description: "Invalid credentials or unauthorized access",
        variant: "destructive",
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg border border-pink-100">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-hotbot-pink" />
              <h1 className="text-2xl font-bold text-gray-900">Admin Access Only</h1>
            </div>
            
            <p className="text-gray-600 mb-6">
              This is a restricted area for administrators only. Please enter your credentials to continue.
            </p>

            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Admin Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-pink-50 border-pink-200 focus:border-pink-400"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-pink-50 border-pink-200 focus:border-pink-400"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500"
              >
                Login to Admin Dashboard
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    );
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