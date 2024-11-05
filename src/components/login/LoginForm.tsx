import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
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
        title: "Welcome back! 👑",
        description: "Successfully logged in!",
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
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleLogin}
      className="space-y-4 bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-auto"
    >
      <Input
        type="email"
        placeholder="Your fabulous email ✨"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-pink-50 border-pink-200 focus:border-pink-400"
      />
      <Input
        type="password"
        placeholder="Your password 🔒"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-pink-50 border-pink-200 focus:border-pink-400"
      />
      <Button 
        type="submit"
        className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3"
      >
        Login Now! 🎉
      </Button>
    </motion.form>
  );
};