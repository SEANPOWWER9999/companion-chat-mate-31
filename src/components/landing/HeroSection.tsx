import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const HeroSection = () => (
  <main className="flex-grow flex flex-col items-center justify-center text-center px-4 min-h-screen">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto pt-20"
    >
      <motion.h2 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-5xl font-bold bg-gradient-to-r from-[#FF0096] to-[#00CCFF] bg-clip-text text-transparent mb-4"
      >
        Welcome to User Private Chat
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-700 mb-8 max-w-2xl mx-auto"
      >
        Experience secure and efficient communication with our advanced chatbot service. 
        Perfect for managing profiles, client communications, and streamlined bookings.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center space-x-4"
      >
        <Link to="/signup">
          <button className="gradient-button">
            Get Started
          </button>
        </Link>
        <Link to="/login">
          <button className="border border-pink-500 text-pink-500 font-bold py-2 px-6 rounded shadow-md hover:shadow-lg transition duration-300">
            Sign In
          </button>
        </Link>
      </motion.div>
    </motion.div>
  </main>
);