import { motion } from "framer-motion";

export const HotBotLogo = () => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-2"
  >
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="relative w-10 h-10"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-hotbot-pink to-hotbot-purple rounded-full" />
      <div className="absolute inset-1 bg-white rounded-full" />
      <div className="absolute inset-2 bg-gradient-to-r from-hotbot-coral to-hotbot-pink rounded-full flex items-center justify-center">
        <span className="text-white text-lg">🤖</span>
      </div>
    </motion.div>
    <span className="text-3xl font-bold bg-gradient-to-r from-hotbot-pink to-hotbot-purple bg-clip-text text-transparent">
      Work My Phone
    </span>
  </motion.div>
);