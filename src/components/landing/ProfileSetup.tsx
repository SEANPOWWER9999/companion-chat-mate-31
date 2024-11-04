import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ProfileSetup = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-white via-pink-50 to-white">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#9400D3] flex items-center justify-center gap-2">
          Time to Shine, Babe! <Sparkles className="w-8 h-8 text-[#FF1493]" />
        </h2>
        <p className="text-xl mb-8 text-gray-700">
          It's that time again—post your ad and watch the messages flood in! You know the drill: 
          10% are broke, another 10% just want to chat, and the rest? Let's be real, they're here for you! 💁‍♀️
        </p>
        <Button asChild className="hotbot-button text-xl px-12 py-6">
          <Link to="/signup">Get Started Now! 💖</Link>
        </Button>
      </motion.div>
    </div>
  </section>
);