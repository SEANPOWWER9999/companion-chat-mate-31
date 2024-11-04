import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export const ClosingSection = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-white via-pink-50 to-white">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#9400D3] flex items-center justify-center gap-2">
            Time to Shine, Babe! <Sparkles className="w-8 h-8 text-[#FF1493]" />
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            It's that time again—post your ad and watch the messages flood in! You know the drill: 
            10% are broke, another 10% just want to chat, and the rest? Let's be real, they're here for you! 💁‍♀️
          </p>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#9400D3]">
            And then—BOOM! 💥
          </h2>
          <p className="text-xl mb-12 text-gray-700">
            You find him! He's got the vibe, seems cash-ready, and you just can't wait to turn 
            this into a night to remember! With The HOTBOT, you're living your best life, babe! 💖
          </p>
        </div>

        <Button asChild className="hotbot-button text-xl px-12 py-6">
          <Link to="/signup">Start Your Journey Now! ✨</Link>
        </Button>
      </motion.div>
    </div>
  </section>
);