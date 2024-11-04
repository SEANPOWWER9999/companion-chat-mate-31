import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HotBotLogo } from "@/components/ui/hotbot-logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full bg-white/80 backdrop-blur-md shadow-lg py-4 fixed top-0 left-0 right-0 z-50 border-b border-pink-100"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <Link to="/">
            <HotBotLogo />
          </Link>
        </motion.div>

        <button 
          className="md:hidden p-2 hover:bg-pink-50 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-hotbot-pink" />
          ) : (
            <Menu className="w-6 h-6 text-hotbot-pink" />
          )}
        </button>

        <nav className="hidden md:block">
          <motion.ul 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-8"
          >
            <li>
              <Link to="/" className="text-gray-600 hover:text-hotbot-pink transition-colors duration-300 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-gray-600 hover:text-hotbot-pink transition-colors duration-300 font-medium">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="bg-gradient-to-r from-hotbot-pink to-hotbot-purple text-white px-6 py-2 rounded-full 
                                          font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                Sign Up
              </Link>
            </li>
          </motion.ul>
        </nav>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-xl md:hidden border-b border-pink-100"
          >
            <ul className="flex flex-col py-4">
              <li>
                <Link 
                  to="/" 
                  className="block px-6 py-3 text-gray-600 hover:text-hotbot-pink hover:bg-pink-50 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/login" 
                  className="block px-6 py-3 text-gray-600 hover:text-hotbot-pink hover:bg-pink-50 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link 
                  to="/signup" 
                  className="block mx-6 my-3 bg-gradient-to-r from-hotbot-pink to-hotbot-purple text-white py-3 px-6 rounded-full text-center
                            font-semibold hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};