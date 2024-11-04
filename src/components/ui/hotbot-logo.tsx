import { Link } from "react-router-dom";

export const HotBotLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative flex flex-col w-full">
        <span className="font-dancing-script text-4xl md:text-6xl 
          bg-gradient-to-r from-hotbot-pink via-hotbot-coral to-hotbot-purple 
          bg-clip-text text-transparent 
          filter drop-shadow-lg 
          hover:scale-105 transition-transform duration-300
          animate-pulse">
          work-my-phone.com
        </span>
        <span className="absolute bottom-[-1rem] right-0 
          text-[0.6rem] font-bold text-gray-400 
          tracking-wider uppercase">
          K&P Development
        </span>
      </div>
    </Link>
  );
};