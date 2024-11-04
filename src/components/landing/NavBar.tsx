import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const NavBar = () => (
  <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-500 to-purple-500">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-4xl font-bold text-white">
          The HOTBOT
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/features" className="text-white hover:text-gray-200 transition-colors">Features</Link>
          <Link to="/pricing" className="text-white hover:text-gray-200 transition-colors">Pricing</Link>
          <Link to="/login" className="text-white hover:text-gray-200 transition-colors">Login</Link>
          <Button asChild className="bg-white text-pink-500 font-bold hover:bg-gray-200 transition duration-300">
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  </nav>
);