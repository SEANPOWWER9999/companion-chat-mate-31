import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Shield, Brain } from "lucide-react";
import { motion } from "framer-motion";

const Training = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Access Restricted",
      description: "Please contact your supervisor for access credentials.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="bg-white p-8 rounded-xl shadow-lg border border-pink-100">
          <div className="flex items-center gap-2 mb-6">
            <Brain className="w-8 h-8 text-hotbot-pink" />
            <h1 className="text-2xl font-bold text-gray-900">Trainer Access Only</h1>
          </div>
          
          <p className="text-gray-600 mb-6">
            This is a restricted area for HotBot trainers only. Please enter your credentials to continue.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Trainer Email"
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
              Login to Training Interface
            </Button>
          </form>

          <div className="mt-4 text-center">
            <Link 
              to="/admin"
              className="text-hotbot-purple hover:text-hotbot-pink transition-colors duration-200"
            >
              Are you an admin? Login here →
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Training;