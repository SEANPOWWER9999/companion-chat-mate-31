import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Star, Heart, Clock, MessageCircle } from "lucide-react";

export const HeroSection = () => (
  <main className="min-h-screen bg-gradient-hotbot text-white px-4 pt-20 pb-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto text-center max-w-4xl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12 space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold flex items-center justify-center gap-4">
          Time to Shine, Gorgeous!{" "}
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-12 h-12 text-hotbot-yellow" />
          </motion.span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90">
          You just posted your ad, and now your phone's blowing up—ugh, here we go again! 😩
          But don't sweat it; that's where <span className="font-bold text-hotbot-yellow">The HOTBOT</span> steps in! 💖
        </p>
        
        <p className="text-lg md:text-xl text-white/85">
          The HOTBOT cuts through the nonsense, filtering out the time-wasters so you only deal with 
          cash-ready clients who matter. 💸 You set your <span className="text-hotbot-yellow">RATES</span> 💰 
          and <span className="text-hotbot-yellow">RESTRICTIONS</span> 🚫, and we handle the rest!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
      >
        <Link to="/signup">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-hotbot-coral text-white font-bold py-4 px-8 rounded-lg
                     shadow-lg transition duration-300 flex items-center justify-center gap-2"
          >
            Get Started <Star className="w-5 h-5" />
          </motion.button>
        </Link>
        <Link to="/login">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto border-2 border-white text-white font-bold py-4 px-8
                     rounded-lg transition duration-300"
          >
            Sign In
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {[
          { icon: Clock, text: "Save Time ⏰", desc: "Automate client interactions so you can focus on the fun stuff!" },
          { icon: MessageCircle, text: "Fast & Accurate ⚡", desc: "Quick and spot-on responses to keep things moving!" },
          { icon: Star, text: "Efficient Management 📅", desc: "Handle appointments like a pro with automated alerts!" },
          { icon: Heart, text: "Personal Touch 💌", desc: "Keep it real with customized responses!" }
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
            >
              <item.icon className="w-8 h-8 text-hotbot-yellow" />
            </motion.div>
            <h3 className="text-lg font-bold text-white">{item.text}</h3>
            <p className="text-sm text-white/90">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </main>
);