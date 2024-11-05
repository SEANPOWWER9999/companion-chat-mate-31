import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ChatSignup = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { toast } = useToast();

  const messages = [
    "Hey gorgeous! 💖 I'm HOTBOT, your new bestie! What's your name?",
    "Love that name! What's your email address? 📧",
    "Perfect! Last thing - create a password to keep your account safe! 🔒",
    "You're all set! Let's make some magic happen! ✨"
  ];

  const handleSubmit = async () => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name
          }
        }
      });
      
      if (error) throw error;
      
      toast({
        title: "Yasss Queen! 👑",
        description: "Check your email to confirm your account!",
      });
      
      setStep(3);
    } catch (error: any) {
      toast({
        title: "Oops! 😅",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleNext = () => {
    if (step === 2 && email && password) {
      handleSubmit();
    } else {
      setStep(step + 1);
    }
  };

  const renderInput = () => {
    switch (step) {
      case 0:
        return (
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            className="flex-1 bg-white/10 text-white border-white/20"
            onKeyPress={(e) => e.key === "Enter" && name && handleNext()}
          />
        );
      case 1:
        return (
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
            className="flex-1 bg-white/10 text-white border-white/20"
            onKeyPress={(e) => e.key === "Enter" && email && handleNext()}
          />
        );
      case 2:
        return (
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create password..."
            className="flex-1 bg-white/10 text-white border-white/20"
            onKeyPress={(e) => e.key === "Enter" && password && handleNext()}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${isFullScreen ? "fixed inset-0 z-50" : "min-h-screen"} bg-gradient-hotbot`}>
      <div className="flex flex-col h-full max-w-2xl mx-auto p-4">
        {!isFullScreen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-4">
              Chat with HOTBOT
            </h1>
            <p className="text-white/80">
              Let's get you started with your fabulous journey! ✨
            </p>
          </motion.div>
        )}

        <div className="flex-1 overflow-y-auto space-y-4 p-4">
          <AnimatePresence>
            {messages.slice(0, step + 1).map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="chat-bubble-bot"
              >
                {message}
              </motion.div>
            ))}

            {step < 3 && name && step > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="chat-bubble-user"
              >
                {name}
              </motion.div>
            )}

            {step < 3 && email && step > 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="chat-bubble-user"
              >
                {email}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {step < 3 && (
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              {renderInput()}
              <Button
                onClick={handleNext}
                disabled={
                  (step === 0 && !name) ||
                  (step === 1 && !email) ||
                  (step === 2 && !password)
                }
                className="bg-white text-hotbot-pink hover:bg-white/90"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}

        {!isFullScreen && step < 3 && (
          <Button
            onClick={() => setIsFullScreen(true)}
            className="mt-4 bg-white/20 text-white hover:bg-white/30"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Open Chat
          </Button>
        )}
      </div>
    </div>
  );
};

export default ChatSignup;