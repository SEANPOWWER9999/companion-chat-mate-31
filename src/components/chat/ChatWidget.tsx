import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 rounded-full bg-hotbot-coral hover:bg-hotbot-pink 
                   shadow-lg transition-all duration-300 flex items-center justify-center"
        >
          <MessageCircle className="w-10 h-10" />
        </Button>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-full h-screen w-screen m-0 p-0">
          <div className="flex flex-col h-full">
            <DialogHeader className="bg-gradient-hotbot p-4">
              <DialogTitle className="text-white font-bold flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat with HOTBOT
              </DialogTitle>
            </DialogHeader>
            
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              <div className="chat-bubble-bot mb-4">
                Hey gorgeous! 💖 Ready to revolutionize your business? 
              </div>
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="flex justify-center mt-8"
              >
                <Link to="/signup">
                  <Button className="bg-hotbot-pink hover:bg-hotbot-coral text-white px-8 py-4 rounded-full text-xl font-bold
                                   shadow-lg hover:shadow-xl transition-all duration-300">
                    Sign Up Now! ✨
                  </Button>
                </Link>
              </motion.div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="flex gap-2 max-w-4xl mx-auto">
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
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};