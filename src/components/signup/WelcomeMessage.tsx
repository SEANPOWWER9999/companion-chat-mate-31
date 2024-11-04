import { motion } from "framer-motion";

export const WelcomeMessage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center mb-8 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl"
  >
    <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
      Time to Shine, Gorgeous! ✨
    </h1>
    <p className="text-gray-700 text-lg">
      The HOTBOT is your perfect BFF—always ready to keep your secrets, 
      hype you up, and make sure you're all about the PAPER. No games, just results! 💁‍♀️
    </p>
  </motion.div>
);