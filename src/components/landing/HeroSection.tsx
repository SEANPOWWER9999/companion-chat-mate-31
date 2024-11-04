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
        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600">
          Hey there, Gorgeous! 💖
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Welcome to WorkMyPhone.com! 📲
        </h2>
        <p className="text-xl text-white/80 mb-8">
          Let's get those messages rolling in! Ready to spice up your hustle?
        </p>
        <p className="text-lg text-pink-300 mb-12 animate-pulse">
          Let The HOTBOT handle the chit-chat while you kick back and relax! 💅
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full px-8 py-6 text-lg transform hover:scale-105 transition-all">
            <Link to="/signup">Get Started Now! 🚀</Link>
          </Button>
          <Button asChild size="lg" variant="outline"
            className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400/10 
                     rounded-full px-8 py-6 text-lg transform hover:scale-105 transition-all">
            <Link to="/learn-more">See The Magic ✨</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);