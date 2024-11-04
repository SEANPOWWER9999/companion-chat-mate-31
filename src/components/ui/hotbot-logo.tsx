import { Link } from "react-router-dom";
import { Smartphone } from "lucide-react";

export const HotBotLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative flex items-center">
        <Smartphone className="w-8 h-8 text-hotbot-pink group-hover:rotate-12 transition-transform duration-300" />
        <div className="flex flex-col">
          <span className="font-playfair font-black text-2xl md:text-3xl
            bg-gradient-to-r from-hotbot-pink via-hotbot-coral to-hotbot-purple 
            bg-clip-text text-transparent 
            filter drop-shadow-lg 
            hover:scale-105 transition-transform duration-300
            whitespace-nowrap ml-2">
            Work My Phone
          </span>
          <span className="absolute -bottom-3 right-0 
            text-[0.6rem] font-black text-black 
            tracking-wider uppercase whitespace-nowrap">
            K&P Development
          </span>
        </div>
      </div>
    </Link>
  );
};