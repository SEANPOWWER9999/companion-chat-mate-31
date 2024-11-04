import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Star, Heart, Clock, MessageCircle } from "lucide-react";

export const HeroSection = () => (
  <main className="min-h-screen bg-gradient-hotbot text-white pt-24 pb-12 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center opacity-10" />
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto text-center max-w-4xl relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12 space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8">
          Time to Shine,{" "}
          <span className="bg-gradient-to-r from-hotbot-yellow to-hotbot-coral bg-clip-text text-transparent">
            Gorgeous!
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
          You just posted your ad, and now your phone's blowing up—ugh, here we go again! 😩
          But don't sweat it; that's where{" "}
          <span className="font-bold text-hotbot-yellow">The HOTBOT</span> steps in! 💖
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
          >
            <Clock className="w-12 h-12 text-hotbot-yellow mb-4" />
            <h3 className="text-xl font-bold mb-2">Save Time ⏰</h3>
            <p>Automate those boring convos and focus on the fun stuff—like planning your next girls' night out! 🍹</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
          >
            <MessageCircle className="w-12 h-12 text-hotbot-yellow mb-4" />
            <h3 className="text-xl font-bold mb-2">Fast & Accurate ⚡</h3>
            <p>Quick, spot-on responses to keep the right clients excited! Just like your bestie's perfect comeback! 😏</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
          >
            <Star className="w-12 h-12 text-hotbot-yellow mb-4" />
            <h3 className="text-xl font-bold mb-2">Efficient Management 👑</h3>
            <p>Handle your appointments like the boss you are! No more double-booking or missing that cash! 💵</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
          >
            <Heart className="w-12 h-12 text-hotbot-yellow mb-4" />
            <h3 className="text-xl font-bold mb-2">Personal Touch 💝</h3>
            <p>Keep it real with customized responses that feel like chatting with your BFF! 💕</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12"
      >
        <Link to="/signup" className="w-full sm:w-auto">
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-hotbot-coral hover:bg-hotbot-pink text-white font-bold py-4 px-8 rounded-xl
                     shadow-lg hover:shadow-2xl transition-all duration-300 
                     flex items-center justify-center gap-2 group"
          >
            <span>Get Started Now</span>
            <Star className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
          </motion.button>
        </Link>
        
        <Link to="/login" className="w-full sm:w-auto">
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full border-2 border-white/50 backdrop-blur-sm text-white font-bold 
                     py-4 px-8 rounded-xl transition-all duration-300 group
                     hover:border-white hover:bg-white/10"
          >
            <span>Sign In</span>
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  </main>
);