import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ClosingSection = () => (
  <section className="py-20 px-4">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#9400D3]">
          And then—BOOM! 💥
        </h2>
        <p className="text-xl mb-12 text-gray-700">
          You find him! He's got the vibe, seems cash-ready, and you just can't wait to turn 
          this into a night to remember! With The HOTBOT, you're living your best life, babe! 💖
        </p>
        <Button asChild className="hotbot-button text-xl px-12 py-6">
          <Link to="/signup">Start Your Journey Now! ✨</Link>
        </Button>
      </motion.div>
    </div>
  </section>
);