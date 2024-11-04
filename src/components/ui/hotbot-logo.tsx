import { Link } from "react-router-dom";

export const HotBotLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative w-full">
        <span className="font-playfair font-black text-4xl md:text-6xl 
          bg-gradient-to-r from-hotbot-pink via-hotbot-coral to-hotbot-purple 
          bg-clip-text text-transparent 
          filter drop-shadow-lg 
          hover:scale-105 transition-transform duration-300
          whitespace-nowrap">
          work-my-phone.com
        </span>
        <span className="absolute -bottom-4 right-0 
          text-[0.6rem] font-black text-gray-400 
          tracking-wider uppercase whitespace-nowrap">
          K&P Development
        </span>
      </div>
    </Link>
  );
};