import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export const HeroSection = () => (
  <section className="py-20 px-4">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="text-5xl md:text-8xl font-bold mb-8 text-transparent bg-clip-text 
                   bg-gradient-to-br from-[#FF1493] via-[#FF69B4] to-[#FF00FF] animate-glow"
        >
          Welcome to WorkMyPhone! 💋
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text 
                   bg-gradient-to-r from-[#FF1493] via-[#FF69B4] to-[#FF00FF]"
        >
          Welcome to WorkMyPhone.com!
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl text-[#FF1493] mb-8 font-semibold"
        >
          Let's get those messages rolling in! Ready to spice up your hustle? 🔥
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="text-xl text-[#FF69B4] mb-12 animate-pulse font-medium"
        >
          Let The HOTBOT handle the chit-chat while you kick back and relax! 💅
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Button asChild size="lg" 
            className="group bg-gradient-to-br from-[#FF1493] via-[#FF69B4] to-[#FF00FF] hover:from-[#FF69B4] hover:via-[#FF00FF] hover:to-[#FF1493] 
                     text-white px-10 py-8 text-xl font-bold transform transition-all duration-300 hover:scale-105 hover:rotate-1"
          >
            <Link to="/signup" className="flex items-center gap-2">
              Get Started Now! <Heart className="w-6 h-6 transition-transform group-hover:scale-125 group-hover:rotate-12" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline"
            className="group border-3 border-[#FF1493] text-[#FF1493] hover:bg-gradient-to-br hover:from-[#FF1493]/10 hover:via-[#FF69B4]/10 hover:to-[#FF00FF]/10
                     px-10 py-8 text-xl font-bold transform transition-all duration-300 hover:scale-105 hover:-rotate-1"
          >
            <Link to="/learn-more" className="flex items-center gap-2">
              See The Magic <Sparkles className="w-6 h-6 transition-transform group-hover:scale-125 group-hover:rotate-12" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);