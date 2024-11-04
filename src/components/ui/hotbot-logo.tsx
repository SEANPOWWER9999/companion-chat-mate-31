import { Link } from "react-router-dom";

export const HotBotLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative w-full">
        <span className="font-playfair font-black text-3xl md:text-4xl lg:text-5xl
          bg-gradient-to-r from-hotbot-pink via-hotbot-coral to-hotbot-purple 
          bg-clip-text text-transparent 
          filter drop-shadow-lg 
          hover:scale-105 transition-transform duration-300
          whitespace-nowrap">
          work-my-phone.com
        </span>
        <span className="absolute -bottom-3 right-0 
          text-[0.6rem] font-black text-gray-400 
          tracking-wider uppercase whitespace-nowrap
          bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text">
          K&P Development
        </span>
      </div>
    </Link>
  );
};