import { Settings, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const HowItWorks = () => (
  <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/50">
    <div className="container mx-auto text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r 
                   from-pink-400 to-purple-400 animate-glow"
      >
        Time to Shine, Babe! ✨
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-full bg-pink-500/20 flex items-center justify-center mb-8 animate-float">
            <Settings className="w-12 h-12 text-pink-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-6">1. Quick Setup 💅</h3>
          <p className="text-lg text-white/70">Post your ad and watch the messages flood in!</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-full bg-pink-500/20 flex items-center justify-center mb-8 animate-float">
            <Sparkles className="w-12 h-12 text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-6">2. Add Your Magic ✨</h3>
          <p className="text-lg text-white/70">Set your style and let HOTBOT work its charm</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-full bg-pink-500/20 flex items-center justify-center mb-8 animate-float">
            <Heart className="w-12 h-12 text-pink-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-6">3. Live Your Best Life 💖</h3>
          <p className="text-lg text-white/70">Focus on what matters while we handle the rest!</p>
        </motion.div>
      </div>
    </div>
  </section>
);
