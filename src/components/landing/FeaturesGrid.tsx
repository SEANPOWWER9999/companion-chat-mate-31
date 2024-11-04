import { MessageCircle, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const FeaturesGrid = () => (
  <section className="bg-gray-50 py-24">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <MessageCircle className="h-12 w-12 text-pink-600 mb-6" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Flirt Like a Pro! 😉</h3>
          <p className="text-gray-600">Keep the convo alive without lifting a finger. We know just what to say to keep them hooked! 💋</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="h-12 w-12 text-pink-600 mb-6" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Filtering 🎯</h3>
          <p className="text-gray-600">We'll highlight the cash-ready cuties and filter out the time-wasters! 💸</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="h-12 w-12 text-pink-600 mb-6" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Touch ✨</h3>
          <p className="text-gray-600">Customize your responses to keep things sexy and real! 💃</p>
        </motion.div>
      </div>
    </div>
  </section>
);