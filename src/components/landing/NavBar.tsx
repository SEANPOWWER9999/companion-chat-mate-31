import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const NavBar = () => (
  <header className="w-full bg-white/90 backdrop-blur-sm shadow-md py-4 fixed top-0 left-0 right-0 z-50">
    <div className="container mx-auto flex justify-between items-center px-4">
      <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-[#FF0096] to-[#00CCFF] bg-clip-text text-transparent">
        User Private Chat
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/login" className="nav-link">Login</Link></li>
          <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
          <li><Link to="/profile" className="nav-link">Profile</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);