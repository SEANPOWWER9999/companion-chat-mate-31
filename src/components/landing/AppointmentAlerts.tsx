import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export const AppointmentAlerts = () => (
  <section className="py-20 px-4">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800/80 backdrop-blur-lg p-8 rounded-lg w-full max-w-4xl mx-auto shadow-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white flex items-center justify-center gap-2">
          Never Miss a Beat! <Clock className="w-8 h-8 text-pink-400" />
        </h2>
        <p className="text-xl mb-8 text-white/90 text-center">
          Get a little nudge when it's time to turn on the charm. 
          Your personal assistant is ready to keep things sizzling! 🔥
        </p>
      </motion.div>
    </div>
  </section>
);