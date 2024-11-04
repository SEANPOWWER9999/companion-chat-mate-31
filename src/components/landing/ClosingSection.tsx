import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Star, Heart } from "lucide-react";

export const ClosingSection = () => (
  <section className="py-24 px-4 bg-gradient-to-br from-white via-pink-50 to-white overflow-hidden">
    <div className="container mx-auto text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto space-y-16 relative"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#9400D3] flex items-center justify-center gap-3">
            <motion.span
              initial={{ rotate: -10 }}
              animate={{ rotate: 10 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              Time to Shine, Babe! 
            </motion.span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-12 h-12 text-[#FF1493]" />
            </motion.div>
          </h2>
          <motion.p 
            className="text-2xl mb-8 text-gray-700 font-medium"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            It's that time again—post your ad and watch the messages flood in! You know the drill: 
            10% are broke, another 10% just want to chat, and the rest? Let's be real, they're here for you! 
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block"
            >
              💁‍♀️
            </motion.span>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <motion.div
            className="absolute -top-10 -left-10 text-pink-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Star className="w-16 h-16" />
          </motion.div>
          <motion.div
            className="absolute -bottom-10 -right-10 text-purple-400"
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Heart className="w-16 h-16" />
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#9400D3]">
            And then—BOOM! 
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block"
            >
              💥
            </motion.span>
          </h2>
          <motion.p 
            className="text-2xl mb-12 text-gray-700 font-medium"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            You find him! He's got the vibe, seems cash-ready, and you just can't wait to turn 
            this into a night to remember! With The HOTBOT, you're living your best life, babe! 
            <motion.span
              animate={{ scale: [1, 1.2, 1], rotate: [0, 14, -8, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              💖
            </motion.span>
          </motion.p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild className="hotbot-button text-2xl px-16 py-8 font-bold">
            <Link to="/signup">Start Your Journey Now! ✨</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);