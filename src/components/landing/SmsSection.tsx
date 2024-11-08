import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const SmsSection = () => (
  <section className="py-20 px-4 bg-white">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-hotbot-pink via-hotbot-purple to-hotbot-coral p-8 rounded-xl 
                   shadow-android border border-white/20 w-full max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white flex items-center justify-center gap-2">
          SMS Magic <MessageCircle className="w-8 h-8 text-hotbot-yellow" />
        </h2>
        <p className="text-xl mb-8 text-white/90 text-center">
          Let The HOTBOT handle the chit-chat while you kick back and relax. 
          We'll filter out the noise and highlight the cash-ready cuties! 💸
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-hotbot-yellow">Smart Filtering 🎯</h3>
            <p className="text-white/80">We'll highlight the serious clients and filter out the time-wasters!</p>
          </div>
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-hotbot-yellow">Auto-Response 💬</h3>
            <p className="text-white/80">Keep conversations flowing even when you're busy living your best life!</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);