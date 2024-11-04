import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { Send } from "lucide-react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      toast({
        title: "Success",
        description: "Check your email to confirm your account",
      });
      navigate("/login");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#ffafbd] to-[#ffc3a0]">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <Sidebar />
        <section className="flex-1 bg-white p-4 flex flex-col">
          <div className="flex-1 overflow-y-auto">
            <div className="chat-bubble self-end bg-pink-500 text-white p-3 rounded-lg shadow-md mb-4 max-w-xs">
              <p>Hey there! Ready to join our amazing community? 😊</p>
            </div>
            <div className="chat-bubble self-start bg-blue-500 text-white p-3 rounded-lg shadow-md mb-4 max-w-xs">
              <p>Just enter your email and password below to get started! 🎉</p>
            </div>
            <form onSubmit={handleSignup} className="space-y-4 mt-8">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-300"
              />
              <Input
                type="password"
                placeholder="Choose a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-300"
              />
              <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600">
                Sign Up
              </Button>
            </form>
          </div>
          <div className="flex items-center p-2 bg-gray-100 rounded-lg shadow-inner mt-4">
            <input
              type="text"
              className="flex-1 p-2 rounded-lg border border-gray-300"
              placeholder="Type your message here, babe! 💋"
            />
            <button className="ml-2 p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;