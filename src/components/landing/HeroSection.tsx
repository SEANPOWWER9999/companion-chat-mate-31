import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Star, Heart } from "lucide-react";

export const HeroSection = () => (
  <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-pink-400 via-purple-500 to-purple-600 text-white px-4 pt-20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto text-center max-w-4xl relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        className="mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 flex items-center justify-center gap-4">
          Time to Shine, Gorgeous!{" "}
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-12 h-12 text-pink-200" />
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto"
        >
          Experience secure and efficient communication with our advanced chatbot service.
          Perfect for managing profiles, client communications, and streamlined bookings!{" "}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <Heart className="inline-block w-6 h-6 ml-2 text-pink-200" />
          </motion.span>
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
      >
        <Link to="/signup">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-white text-purple-600 font-bold py-4 px-8 rounded-lg
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
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
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
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
            >
              <item.icon className="w-8 h-8 text-pink-200" />
            </motion.div>
            <span className="text-sm font-medium text-pink-100">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </main>
);