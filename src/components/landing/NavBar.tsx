import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HotBotLogo } from "@/components/ui/hotbot-logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm shadow-md py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <HotBotLogo />
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-hotbot-pink" />
          ) : (
            <Menu className="w-6 h-6 text-hotbot-pink" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <motion.ul 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            <li><Link to="/" className="text-gray-600 hover:text-hotbot-pink transition-colors duration-300">Home</Link></li>
            <li><Link to="/login" className="text-gray-600 hover:text-hotbot-pink transition-colors duration-300">Login</Link></li>
            <li><Link to="/signup" className="text-gray-600 hover:text-hotbot-pink transition-colors duration-300">Sign Up</Link></li>
            <li><Link to="/profile" className="text-gray-600 hover:text-hotbot-pink transition-colors duration-300">Profile</Link></li>
          </motion.ul>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg md:hidden"
          >
            <ul className="flex flex-col py-4">
              <li><Link to="/" className="block px-6 py-3 text-gray-600 hover:text-hotbot-pink hover:bg-gray-50 transition-colors duration-300">Home</Link></li>
              <li><Link to="/login" className="block px-6 py-3 text-gray-600 hover:text-hotbot-pink hover:bg-gray-50 transition-colors duration-300">Login</Link></li>
              <li><Link to="/signup" className="block px-6 py-3 text-gray-600 hover:text-hotbot-pink hover:bg-gray-50 transition-colors duration-300">Sign Up</Link></li>
              <li><Link to="/profile" className="block px-6 py-3 text-gray-600 hover:text-hotbot-pink hover:bg-gray-50 transition-colors duration-300">Profile</Link></li>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};