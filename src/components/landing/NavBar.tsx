import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const NavBar = () => (
  <nav className="sticky top-0 z-50 backdrop-blur-lg bg-hotbot-dark/50 border-b border-hotbot-primary/20">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-white flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.1 }} className="relative w-8 h-8">
            <img
              src="/woman-texting-silhouette.svg"
              alt="HotBot Logo"
              className="w-full h-full text-hotbot-secondary"
            />
          </motion.div>
          <motion.span
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="bg-gradient-to-r from-hotbot-secondary via-hotbot-accent to-hotbot-primary text-transparent bg-clip-text bg-[size:200%]"
          >
            HOTBOT
          </motion.span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/features" className="text-white/80 hover:text-hotbot-secondary transition-colors">Features</Link>
          <Link to="/pricing" className="text-white/80 hover:text-hotbot-secondary transition-colors">Pricing</Link>
          <Link to="/login" className="text-white/80 hover:text-hotbot-secondary transition-colors">Login</Link>
          <Button asChild className="hotbot-button">
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  </nav>
);