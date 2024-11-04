import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export const AppointmentAlerts = () => (
  <section className="py-20 px-4">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hotbot-card max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#9400D3] flex items-center justify-center gap-2">
          Never Miss a Beat! <Clock className="w-8 h-8 text-[#FF1493]" />
        </h2>
        <p className="text-xl mb-8 text-gray-700 text-center">
          Get a little nudge when it's time to turn on the charm. 
          Your personal assistant is ready to keep things sizzling! 🔥
        </p>
      </motion.div>
    </div>
  </section>
);