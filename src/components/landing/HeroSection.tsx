import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Star, Heart, Clock, MessageCircle } from "lucide-react";

export const HeroSection = () => (
  <main className="min-h-screen bg-gradient-hotbot text-white pt-24 pb-12 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center opacity-10" />
    
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
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          Time to Shine,{" "}
          <span className="bg-gradient-to-r from-hotbot-yellow to-hotbot-coral bg-clip-text text-transparent">
            Gorgeous!
          </span>{" "}
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-hotbot-yellow inline" />
          </motion.span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
          You just posted your ad, and now your phone's blowing up—ugh, here we go again! 😩
          But don't sweat it; that's where{" "}
          <span className="font-bold text-hotbot-yellow">The HOTBOT</span> steps in! 💖
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
          { icon: Clock, text: "Save Time ⏰", desc: "Automate client interactions" },
          { icon: MessageCircle, text: "Smart Replies ⚡", desc: "Quick & accurate responses" },
          { icon: Star, text: "Pro Management 📅", desc: "Automated appointment alerts" },
          { icon: Heart, text: "Personal Touch 💌", desc: "Customized interactions" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white/10 backdrop-blur-sm
                     hover:shadow-lg transition-all duration-300"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-hotbot-yellow"
            >
              <item.icon className="w-8 h-8" />
            </motion.div>
            <h3 className="text-lg font-bold text-white">{item.text}</h3>
            <p className="text-sm text-white/90">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </main>
);