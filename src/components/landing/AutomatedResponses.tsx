import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const AutomatedResponses = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-white via-pink-50 to-white">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#9400D3] flex items-center justify-center gap-2">
          Flirt Like a Pro! <Heart className="w-8 h-8 text-[#FF1493]" />
        </h2>
        <p className="text-xl mb-8 text-gray-700">
          Keep the convo alive without lifting a finger. The HOTBOT knows just what to say 
          to keep them hooked and wanting more! 💋
        </p>
      </motion.div>
    </div>
  </section>
);