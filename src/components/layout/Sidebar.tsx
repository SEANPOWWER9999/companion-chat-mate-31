import { Link } from "react-router-dom";
import { Home, MessageCircle, Settings, User } from "lucide-react";

export const Sidebar = () => (
  <aside className="w-1/4 bg-pink-200 p-4 flex flex-col items-center">
    <nav className="flex flex-col space-y-4">
      <Link to="/" className="text-xl text-pink-700 hover:text-pink-900 flex items-center gap-2">
        <Home className="w-5 h-5" /> Home
      </Link>
      <Link to="/messages" className="text-xl text-pink-700 hover:text-pink-900 flex items-center gap-2">
        <MessageCircle className="w-5 h-5" /> Messages
      </Link>
      <Link to="/settings" className="text-xl text-pink-700 hover:text-pink-900 flex items-center gap-2">
        <Settings className="w-5 h-5" /> Settings
      </Link>
      <Link to="/profile" className="text-xl text-pink-700 hover:text-pink-900 flex items-center gap-2">
        <User className="w-5 h-5" /> Profile
      </Link>
    </nav>
  </aside>
);