export const HotBotLogo = () => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center gap-1"
  >
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="bg-gradient-to-r from-hotbot-pink to-hotbot-purple p-2 rounded-full"
    >
      <div className="bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
        <span className="text-white text-sm md:text-lg">🤖</span>
      </div>
    </motion.div>
    <div className="flex flex-col items-center">
      <span className="text-2xl md:text-4xl font-['Dancing_Script'] bg-gradient-to-r from-hotbot-pink to-hotbot-purple bg-clip-text text-transparent">
        Work My Phone
      </span>
      <span className="text-xs text-gray-500 font-roboto">
        developed by K&P Development
      </span>
    </div>
  </motion.div>
);