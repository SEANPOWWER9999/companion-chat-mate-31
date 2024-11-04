import { Link } from "react-router-dom";

export const HotBotLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="flex flex-col items-start">
        <span className="font-dancing-script text-3xl md:text-5xl bg-gradient-to-r from-hotbot-pink to-hotbot-purple bg-clip-text text-transparent">
          work-my-phone.com
        </span>
        <span className="text-xs text-gray-500">
          developed by K&P Development
        </span>
      </div>
    </Link>
  );
};