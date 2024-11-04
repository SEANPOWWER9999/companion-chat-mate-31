import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

export const HeroSection = () => (
  <main className="flex-grow flex flex-col items-center justify-center text-center px-4 min-h-screen">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto pt-20"
    >
      <motion.h1 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text 
                   bg-gradient-to-r from-pink-400 to-purple-400 mb-6 flex items-center justify-center gap-4"
      >
        Time to Shine <Sparkles className="w-12 h-12 text-pink-400" />
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
      >
        Your phone's blowing up? Don't sweat it! Let The HOTBOT handle the 
        boring stuff while you focus on what matters. We've got your back! 💅
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <Link to="/signup">
          <button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 
                           text-white font-bold py-4 px-8 rounded-full shadow-lg 
                           hover:shadow-pink-500/50 transition duration-300 flex items-center gap-2">
            Get Started <Star className="w-5 h-5" />
          </button>
        </Link>
        <Link to="/login">
          <button className="w-full sm:w-auto border-2 border-pink-500 text-pink-400 
                           font-bold py-4 px-8 rounded-full shadow-md 
                           hover:shadow-pink-500/30 transition duration-300">
            Sign In
          </button>
        </Link>
      </motion.div>
    </motion.div>
  </main>
);