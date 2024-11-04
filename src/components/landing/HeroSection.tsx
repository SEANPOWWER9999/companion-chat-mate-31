import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const HeroSection = () => (
  <section className="py-20 px-4">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-hotbot-secondary via-hotbot-accent to-hotbot-primary">
          Hey there, Gorgeous! 💖
        </h1>
        <p className="text-xl text-white/80 mb-8">
          Ready to spice up your hustle? Let HotBot handle the small talk while you focus on what matters.
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
);