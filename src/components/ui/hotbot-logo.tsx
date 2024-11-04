import { Link } from "react-router-dom";

export const HotBotLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative flex flex-col w-full">
        <span className="font-dancing-script text-3xl md:text-5xl bg-gradient-to-r from-hotbot-pink via-hotbot-coral to-hotbot-purple bg-clip-text text-transparent filter drop-shadow-lg">
          work-my-phone.com
        </span>
        <span className="absolute bottom-0 right-0 text-xs font-bold text-gray-500">
          developed by K&P Development
        </span>
      </div>
    </Link>
  );
};