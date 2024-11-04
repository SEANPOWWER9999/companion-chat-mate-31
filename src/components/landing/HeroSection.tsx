import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Star, Heart } from "lucide-react";

export const HeroSection = () => (
  <main className="flex-grow flex flex-col items-center justify-center text-center px-4 min-h-screen 
                   bg-gradient-to-br from-white via-pink-50 to-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/woman-texting-silhouette.svg')] 
         bg-no-repeat bg-center opacity-5 animate-pulse" />
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto pt-20 relative z-10"
    >
      <motion.h1 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-4"
      >
        Time to Shine, Gorgeous! <Sparkles className="w-12 h-12 text-hotbot-gold animate-pulse" />
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
      >
        Your phone's blowing up? Don't sweat it! 💅 Let The HOTBOT handle the 
        boring stuff while you focus on what matters. We've got your back! <Heart className="inline-block w-6 h-6 text-hotbot-coral" />
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <Link to="/signup">
          <button className="w-full sm:w-auto bg-hotbot-red hover:bg-hotbot-coral 
                           text-white font-bold py-4 px-8 rounded-full shadow-lg 
                           hover:shadow-hotbot-red/50 transition duration-300 
                           flex items-center gap-2 transform hover:scale-105">
            Get Started <Star className="w-5 h-5" />
          </button>
        </Link>
        <Link to="/login">
          <button className="w-full sm:w-auto border-2 border-hotbot-gold text-hotbot-gold 
                           font-bold py-4 px-8 rounded-full shadow-md 
                           hover:shadow-hotbot-gold/30 transition duration-300 
                           hover:bg-hotbot-gold/10 transform hover:scale-105">
            Sign In
          </button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-12 flex flex-wrap justify-center gap-6 text-gray-600"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-hotbot-gold" />
          <span>Save Time</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-hotbot-coral" />
          <span>Fast & Accurate</span>
        </div>
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-hotbot-pink" />
          <span>Personal Touch</span>
        </div>
      </motion.div>
    </motion.div>
  </main>
);