import { motion } from "framer-motion";

export const HotBotLogo = () => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center gap-1"
  >
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="relative w-8 h-8 md:w-10 md:h-10"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-hotbot-pink to-hotbot-purple rounded-full" />
      <div className="absolute inset-1 bg-white rounded-full" />
      <div className="absolute inset-2 bg-gradient-to-r from-hotbot-coral to-hotbot-pink rounded-full flex items-center justify-center">
        <span className="text-white text-sm md:text-lg">🤖</span>
      </div>
    </motion.div>
    <div className="flex flex-col items-center">
      <span className="text-xl md:text-3xl font-['Dancing_Script'] bg-gradient-to-r from-hotbot-pink to-hotbot-purple bg-clip-text text-transparent">
        Work My Phone
      </span>
      <span className="text-xs text-gray-500 font-roboto">
        developed by K&P Development
      </span>
    </div>
  </motion.div>
);