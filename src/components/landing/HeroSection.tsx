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
                   bg-gradient-to-r from-pink-500 to-purple-500 animate-glow"
        >
          Welcome to WorkMyPhone! 💋
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text 
                   bg-gradient-to-r from-pink-500 to-purple-500"
        >
          Welcome to WorkMyPhone.com!
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl text-pink-500 mb-8 font-semibold"
        >
          Let's get those messages rolling in! Ready to spice up your hustle? 🔥
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="text-xl text-purple-500 mb-12 animate-pulse font-medium"
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
            className="group bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500
                     text-white px-10 py-8 text-xl font-bold transform transition-all duration-300 hover:scale-105 hover:rotate-1"
          >
            <Link to="/signup" className="flex items-center gap-2">
              Get Started Now! <Heart className="w-6 h-6 transition-transform group-hover:scale-125 group-hover:rotate-12" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline"
            className="group border-3 border-pink-500 text-pink-500 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-500/10
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