import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export const HeroSection = () => (
  <section className="py-20 px-4 bg-gradient-to-r from-pink-500 to-red-500">
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
          className="text-5xl font-bold mb-4 text-white"
        >
          Welcome to The HOTBOT
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl mb-8 text-white"
        >
          Your ultimate AI companion for all things hot and trending!
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-row justify-center gap-6"
        >
          <Button asChild size="lg" 
            className="bg-white text-pink-500 font-bold hover:bg-gray-200 transition duration-300"
          >
            <Link to="/signup" className="flex items-center gap-2">
              Get Started <Heart className="w-6 h-6" />
            </Link>
          </Button>
          <Button asChild size="lg" 
            className="bg-gray-800 text-white font-bold hover:bg-gray-700 transition duration-300"
          >
            <Link to="/signup" className="flex items-center gap-2">
              Sign Up <Sparkles className="w-6 h-6" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);