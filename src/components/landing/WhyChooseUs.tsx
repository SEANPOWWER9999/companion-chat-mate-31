import { motion } from "framer-motion";
import { Clock, Zap, Crown, Sparkles } from "lucide-react";

export const WhyChooseUs = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-white via-pink-50 to-white">
    <div className="container mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#9400D3]"
      >
        Why You'll Love It 💕
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <Clock className="w-12 h-12 text-[#FF1493] mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 text-[#FF1493]">Save Time 🎉</h3>
          <p className="text-gray-700">Automate those boring convos and focus on the fun stuff!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <Zap className="w-12 h-12 text-[#FF1493] mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 text-[#FF1493]">Fast & Accurate 😘</h3>
          <p className="text-gray-700">Deliver quick, flirty replies that keep the right clients excited!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <Crown className="w-12 h-12 text-[#FF1493] mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 text-[#FF1493]">Efficient Management 💪</h3>
          <p className="text-gray-700">Handle your appointments like the boss you are!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <Sparkles className="w-12 h-12 text-[#FF1493] mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 text-[#FF1493]">Personal Touch 💃</h3>
          <p className="text-gray-700">Customize your responses to keep things sexy and real!</p>
        </motion.div>
      </div>
    </div>
  </section>
);