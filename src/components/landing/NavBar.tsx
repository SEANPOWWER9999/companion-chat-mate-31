import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NavBar = () => (
  <header className="w-full bg-white/90 backdrop-blur-sm shadow-md py-4 fixed top-0 left-0 right-0 z-50">
    <div className="container mx-auto flex justify-between items-center px-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          User Private Chat
        </Link>
      </motion.div>
      <nav>
        <motion.ul 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex space-x-6"
        >
          <li><Link to="/" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Home</Link></li>
          <li><Link to="/login" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Login</Link></li>
          <li><Link to="/signup" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Sign Up</Link></li>
          <li><Link to="/profile" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Profile</Link></li>
        </motion.ul>
      </nav>
    </div>
  </header>
);