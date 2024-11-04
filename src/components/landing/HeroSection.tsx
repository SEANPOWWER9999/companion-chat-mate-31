import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Star, Heart } from "lucide-react";

export const HeroSection = () => (
  <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-pink-400 to-purple-600 text-white px-4 pt-20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto text-center max-w-4xl"
    >
      <motion.h1
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-5xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-4"
      >
        Time to Shine, Gorgeous! <Sparkles className="w-12 h-12 text-pink-200 animate-pulse" />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl mb-12 text-pink-100"
      >
        Experience secure and efficient communication with our advanced chatbot service. 
        Perfect for managing profiles, client communications, and streamlined bookings! 
        <Heart className="inline-block w-6 h-6 ml-2 text-pink-200" />
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <Link to="/signup">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-white text-purple-600 font-bold py-3 px-8 rounded-lg 
                     hover:shadow-lg transition duration-300 flex items-center justify-center gap-2"
          >
            Get Started <Star className="w-5 h-5" />
          </motion.button>
        </Link>
        <Link to="/login">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto border-2 border-white text-white font-bold py-3 px-8 
                     rounded-lg hover:bg-white/10 transition duration-300"
          >
            Sign In
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-pink-100"
      >
        {[
          { icon: Sparkles, text: "Profile Management" },
          { icon: Star, text: "Client Communication" },
          { icon: Heart, text: "Booking System" },
          { icon: Sparkles, text: "Premium Security" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 backdrop-blur-sm"
          >
            <item.icon className="w-6 h-6" />
            <span className="text-sm">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </main>
);