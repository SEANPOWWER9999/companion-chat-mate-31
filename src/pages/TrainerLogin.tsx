import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const TrainerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data: { user }, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Check if user has trainer role
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (!["admin", "trainer"].includes(profile?.role || "")) {
        throw new Error("Unauthorized access");
      }

      toast({
        title: "Welcome back, Trainer!",
        description: "Successfully logged in",
      });
      navigate("/training");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
          <div className="flex justify-center mb-8">
            <Brain className="w-12 h-12 text-hotbot-coral" />
          </div>
          <h1 className="text-3xl font-bold text-white text-center mb-8">Trainer Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <Input
              type="email"
              placeholder="Trainer Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/20 border-white/20 text-white placeholder:text-white/70"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/20 border-white/20 text-white placeholder:text-white/70"
            />
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-hotbot-coral to-hotbot-purple hover:from-hotbot-purple hover:to-hotbot-coral text-white"
            >
              Login as Trainer
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrainerLogin;