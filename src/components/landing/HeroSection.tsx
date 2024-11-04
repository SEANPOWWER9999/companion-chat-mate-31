import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
          className="text-5xl md:text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 animate-glow"
        >
          Hey there, Gorgeous! 💖
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
        >
          Welcome to WorkMyPhone.com! 📲
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl text-white/90 mb-8 font-semibold"
        >
          Let's get those messages rolling in! Ready to spice up your hustle?
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="text-xl text-pink-300 mb-12 animate-pulse font-medium"
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
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 
                     text-white rounded-full px-10 py-8 text-xl font-bold transform hover:scale-105 
                     transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
          >
            <Link to="/signup">Get Started Now! 🚀</Link>
          </Button>
          <Button asChild size="lg" variant="outline"
            className="border-3 border-pink-400 text-pink-400 hover:bg-pink-400/10 
                     rounded-full px-10 py-8 text-xl font-bold transform hover:scale-105 
                     transition-all duration-300 shadow-lg hover:shadow-pink-400/30"
          >
            <Link to="/learn-more">See The Magic ✨</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);