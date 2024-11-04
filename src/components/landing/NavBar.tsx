import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const NavBar = () => (
  <nav className="chat-nav">
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-4xl font-bold bg-gradient-to-r from-[#FF0096] to-[#00CCFF] bg-clip-text text-transparent">
          The HOTBOT
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/features" className="chat-nav-link">Features</Link>
          <Link to="/pricing" className="chat-nav-link">Pricing</Link>
          <Link to="/login" className="chat-nav-link">Login</Link>
          <Button asChild className="chat-button">
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  </nav>
);