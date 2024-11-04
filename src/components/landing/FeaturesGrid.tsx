import { MessageCircle, Shield, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const FeaturesGrid = () => (
  <section className="py-20 px-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-br from-purple-900/80 to-pink-500/20 backdrop-blur-xl p-8 shadow-lg hover:shadow-pink-500/20"
        >
          <MessageCircle className="h-12 w-12 text-pink-400 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Flirt Like a Pro! 😉</h3>
          <p className="text-white/70">Keep the convo alive without lifting a finger. We know just what to say to keep them hooked! 💋</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-br from-purple-900/80 to-pink-500/20 backdrop-blur-xl p-8 shadow-lg hover:shadow-pink-500/20"
        >
          <Shield className="h-12 w-12 text-purple-400 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Smart Filtering 🎯</h3>
          <p className="text-white/70">We'll highlight the cash-ready cuties and filter out the time-wasters! 💸</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-br from-purple-900/80 to-pink-500/20 backdrop-blur-xl p-8 shadow-lg hover:shadow-pink-500/20"
        >
          <Sparkles className="h-12 w-12 text-pink-400 mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Personal Touch ✨</h3>
          <p className="text-white/70">Customize your responses to keep things sexy and real! 💃</p>
        </motion.div>
      </div>
    </div>
  </section>
);