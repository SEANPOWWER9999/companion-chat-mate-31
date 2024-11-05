import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SignupForm } from "@/components/signup/SignupForm";
import { useToast } from "@/hooks/use-toast";

const ChatSignup = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const addMessage = (message: string) => {
    setMessages(prev => [...prev, message]);
  };

  useEffect(() => {
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      addMessage("Hey there! 👋 Let's set up your profile!");
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      addMessage("I'm HOTBOT, and I'll help you get started! ✨");
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      addMessage("Ready to create your amazing profile?");
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowForm(true);
    };

    sequence();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto space-y-4">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="chat-bubble-bot"
            >
              {message}
            </motion.div>
          ))}
        </AnimatePresence>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SignupForm />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ChatSignup;