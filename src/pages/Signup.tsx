import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Signup = () => {
  const [name, setName] = useState("");
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
        options: {
          data: {
            name,
          },
        },
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#ffafbd] to-[#ffc3a0]">
      <header className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-['Pacifico'] tracking-wide">Time to Shine, Gorgeous! ✨</h1>
        <div className="flex items-center">
          <span className="text-lg mr-2">Online</span>
          <Star className="w-6 h-6 text-yellow-300 animate-pulse" />
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-1/4 bg-pink-200 p-4 flex flex-col items-center">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-xl text-pink-700 hover:text-pink-900 flex items-center gap-2">
              <i className="fas fa-home"></i> Home
            </Link>
            <Link to="/profile" className="text-xl text-pink-700 hover:text-pink-900 flex items-center gap-2">
              <i className="fas fa-user"></i> Profile
            </Link>
            <Link to="/preferences" className="text-xl text-pink-700 hover:text-pink-900 flex items-center gap-2">
              <i className="fas fa-cog"></i> Settings
            </Link>
          </nav>
        </aside>

        <main className="flex-1 bg-white/90 backdrop-blur-sm p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Create Your Account
            </h2>
            <form onSubmit={handleSignup} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/90 border-pink-200 focus:border-pink-500 rounded-xl h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/90 border-pink-200 focus:border-pink-500 rounded-xl h-12"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/90 border-pink-200 focus:border-pink-500 rounded-xl h-12"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl h-12 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Sign Up
              </Button>
              <div className="text-center text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-pink-500 hover:text-pink-600 font-semibold">
                  Login
                </Link>
              </div>
            </form>
          </motion.div>
        </main>
      </div>

      <footer className="bg-pink-500 text-white p-4 flex justify-around items-center">
        <button className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
          <i className="fas fa-heart"></i>
          <span>Send a Flirt 💌</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
          <i className="fas fa-calendar-alt"></i>
          <span>Book an Appointment 📅</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
          <i className="fas fa-dollar-sign"></i>
          <span>Get Paid 💰</span>
        </button>
      </footer>
    </div>
  );
};

export default Signup;