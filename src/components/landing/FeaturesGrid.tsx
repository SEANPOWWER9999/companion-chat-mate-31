import { MessageCircle, Shield, Clock } from "lucide-react";
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
          className="hotbot-card"
        >
          <MessageCircle className="h-12 w-12 text-hotbot-secondary mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Flirt Like a Pro! 😉</h3>
          <p className="text-white/70">Keep the convo alive without lifting a finger. We know just what to say!</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hotbot-card"
        >
          <Shield className="h-12 w-12 text-hotbot-accent mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Privacy First 🔒</h3>
          <p className="text-white/70">Use your own number with complete discretion. Clients never know it's a bot.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hotbot-card"
        >
          <Clock className="h-12 w-12 text-hotbot-primary mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Time Saver ⏰</h3>
          <p className="text-white/70">Filter out time-wasters and focus on serious clients ready to book.</p>
        </motion.div>
      </div>
    </div>
  </section>
);