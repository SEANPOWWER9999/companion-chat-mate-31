import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Star, Heart, DollarSign, Crown } from "lucide-react";

export const ClosingSection = () => (
  <section className="py-32 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 overflow-hidden">
    <div className="container mx-auto text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto space-y-20 relative"
      >
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
            <h2 className="text-8xl md:text-[12rem] font-black mb-12 text-white drop-shadow-2xl">
              Start Today! 
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                ✨
              </motion.span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <p className="text-7xl mb-12 font-black text-white/90 tracking-tight">
              Let's get those messages flowing! 
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

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10"
        >
          <Button asChild className="bg-white hover:bg-gray-100 text-pink-600 text-4xl px-20 py-10 
                                   font-black rounded-full shadow-xl hover:shadow-2xl transition-all duration-500">
            <Link to="/signup" className="flex items-center gap-3">
              Get Started Now!
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