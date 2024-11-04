import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-hotbot-coral hover:bg-hotbot-pink 
                   shadow-lg transition-all duration-300 flex items-center justify-center"
        >
          <MessageCircle className={`w-8 h-8 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-4 w-[350px] bg-white rounded-2xl shadow-2xl z-40
                     border-2 border-hotbot-pink/20 overflow-hidden"
          >
            <div className="bg-gradient-hotbot p-4 flex justify-between items-center">
              <h3 className="text-white font-bold flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat with HOTBOT
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="h-[400px] overflow-y-auto p-4 bg-gray-50">
              <div className="chat-bubble-bot mb-4">
                Hey gorgeous! 💖 Ready to revolutionize your business? 
              </div>
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="flex justify-center mt-8"
              >
                <Link to="/signup">
                  <Button className="bg-hotbot-pink hover:bg-hotbot-coral text-white px-6 py-3 rounded-full font-bold
                                   shadow-lg hover:shadow-xl transition-all duration-300">
                    Sign Up Now! ✨
                  </Button>
                </Link>
              </motion.div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none 
                           focus:border-hotbot-pink"
                />
                <Button className="rounded-full w-10 h-10 bg-hotbot-coral hover:bg-hotbot-pink 
                                 flex items-center justify-center">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};