import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Star, Sparkles, Flame } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-900">
      {/* Glassmorphism Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-3xl font-bold text-white flex items-center gap-2">
              <Flame className="h-8 w-8 text-pink-400" />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                HOTBOT
              </span>
            </Link>
            <div className="flex items-center gap-8">
              <Link to="/login" className="text-white/80 hover:text-pink-400 transition-colors">Login</Link>
              <Button asChild className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-6">
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
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-red-400">
              Your Perfect Digital Companion
            </h1>
            <p className="text-xl text-white/80 mb-12">
              Experience the future of digital companionship with AI-powered conversations 
              that understand and adapt to your unique style.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 
                         text-white rounded-full px-8 py-6 text-lg transform hover:scale-105 transition-all">
                <Link to="/signup">Start Your Journey</Link>
              </Button>
              <Button asChild size="lg" variant="outline"
                className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400/10 rounded-full 
                         px-8 py-6 text-lg transform hover:scale-105 transition-all">
                <Link to="/learn-more">Learn More</Link>
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
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <Heart className="h-12 w-12 text-pink-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Personalized Experience</h3>
              <p className="text-white/70">Tailored conversations that adapt to your preferences and style.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <Sparkles className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Smart Interactions</h3>
              <p className="text-white/70">AI-powered responses that feel natural and engaging.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <Star className="h-12 w-12 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Premium Features</h3>
              <p className="text-white/70">Access to exclusive features and premium content.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg border-white/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white">Ready to Experience Something Amazing?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 
                         text-white rounded-full px-8 py-6 text-lg transform hover:scale-105 transition-all">
                <Link to="/signup">Join Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;