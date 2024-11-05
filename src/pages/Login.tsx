import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      toast({
        title: "Welcome back! 💖",
        description: "Successfully logged in",
      });
      navigate("/profile");
    } catch (error: any) {
      toast({
        title: "Oops! 😅",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hotbot flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Welcome Back! ✨</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
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
              className="w-full bg-white text-hotbot-pink hover:bg-white/90"
            >
              Login
            </Button>
            <div className="text-center text-white/70">
              Don't have an account?{" "}
              <Link to="/signup" className="text-white hover:text-pink-200">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;