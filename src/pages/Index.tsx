import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, Shield, Clock, Sparkles, Heart, Settings } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-hotbot-dark via-hotbot-primary/20 to-hotbot-dark">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-hotbot-dark/50 border-b border-hotbot-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-3xl font-bold text-white flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative w-8 h-8"
              >
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-hotbot-secondary via-hotbot-accent to-hotbot-primary">
              Your Ultimate Chat Wingwoman
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Turn Client Chats into Bookings Without Breaking a Sweat. 
              Let HotBot handle the small talk while you focus on what matters.
            </p>
            <p className="text-lg text-hotbot-accent mb-12 animate-pulse">
              Your #1 Time Saver for Texting and Screening—Because You've Got Better Things to Do ;)
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="hotbot-button text-lg">
                <Link to="/signup">Start Your Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline"
                className="border-2 border-hotbot-secondary text-hotbot-secondary hover:bg-hotbot-secondary/10 
                         rounded-2xl px-8 py-6 text-lg transform hover:scale-105 transition-all">
                <Link to="/learn-more">See How It Works</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hotbot-card"
            >
              <MessageCircle className="h-12 w-12 text-hotbot-secondary mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Smart Conversations</h3>
              <p className="text-white/70">Natural, flirty chats that keep clients engaged and excited to book.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hotbot-card"
            >
              <Shield className="h-12 w-12 text-hotbot-accent mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Privacy First</h3>
              <p className="text-white/70">Use your own number with complete discretion. Clients never know it's a bot.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hotbot-card"
            >
              <Clock className="h-12 w-12 text-hotbot-primary mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Time Saver</h3>
              <p className="text-white/70">Filter out time-wasters and focus on serious clients ready to book.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-hotbot-dark/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-hotbot-secondary to-hotbot-primary">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-hotbot-primary/20 flex items-center justify-center mb-6 animate-float">
                <Settings className="w-8 h-8 text-hotbot-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">1. Quick Setup</h3>
              <p className="text-white/70">Link your number and set your preferences in minutes</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-hotbot-primary/20 flex items-center justify-center mb-6 animate-float">
                <Sparkles className="w-8 h-8 text-hotbot-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">2. Customize</h3>
              <p className="text-white/70">Set your style, tone, and screening preferences</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-hotbot-primary/20 flex items-center justify-center mb-6 animate-float">
                <Heart className="w-8 h-8 text-hotbot-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">3. Start Booking</h3>
              <p className="text-white/70">Let HotBot handle the chats while you focus on clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;