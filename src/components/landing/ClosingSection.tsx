import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Star, Heart, DollarSign, Crown } from "lucide-react";

export const ClosingSection = () => (
  <section className="py-32 px-4 bg-gradient-to-br from-white via-pink-50 to-white overflow-hidden">
    <div className="container mx-auto text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto space-y-20 relative"
      >
        {/* Decorative elements */}
        <motion.div 
          className="absolute -top-20 -left-20 text-pink-400 opacity-50"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Star className="w-32 h-32" />
        </motion.div>
        <motion.div 
          className="absolute -bottom-20 -right-20 text-purple-400 opacity-50"
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Heart className="w-32 h-32" />
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="relative z-10"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <h2 className="text-7xl md:text-9xl font-black mb-12 text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#FF1493] via-[#FF69B4] to-[#9400D3]">
              Time to Shine! 
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                👑
              </motion.span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <p className="text-5xl mb-12 font-black bg-gradient-to-br from-[#FF00FF] via-[#FF1493] to-[#FF69B4] 
                         text-transparent bg-clip-text relative z-10 tracking-tight">
              Ready to make it rain? Let's get those messages flooding in! 
              <motion.span
                animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block ml-2"
              >
                💸
              </motion.span>
            </p>
          </motion.div>
        </motion.div>

        {/* BOOM section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.6 }}
          className="relative z-10"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [-1, 1, -1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <h2 className="text-8xl md:text-[10rem] font-black mb-12 text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#FF1493] via-[#FF69B4] to-[#9400D3] drop-shadow-2xl">
              BOOM! 
              <motion.span
                animate={{ scale: [1, 1.5, 1], rotate: [0, 20, -20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block"
              >
                💥
              </motion.span>
            </h2>
          </motion.div>

          <motion.p 
            className="text-3xl mb-16 font-bold text-[#FF1493]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            You've got this! Let's make every message count! 
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block ml-2"
            >
              ✨
            </motion.span>
          </motion.p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10"
        >
          <Button asChild className="hotbot-button text-3xl px-20 py-10 font-black 
                                   shadow-xl hover:shadow-2xl transition-all duration-500">
            <Link to="/signup" className="flex items-center gap-3">
              Start Slaying Now!
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Crown className="w-8 h-8" />
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);