import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Crown } from "lucide-react";

export const ClosingSection = () => (
  <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-2 text-white">AI-Powered</h3>
            <p className="text-gray-300">Experience the power of AI with our cutting-edge technology.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-2 text-white">Trending Topics</h3>
            <p className="text-gray-300">Stay updated with the latest trends and hot topics.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-2 text-white">Community</h3>
            <p className="text-gray-300">Join a vibrant community of like-minded individuals.</p>
          </motion.div>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-12"
        >
          <Button asChild className="bg-white text-pink-500 font-bold py-2 px-8 rounded-full hover:bg-gray-200 transition duration-300">
            <Link to="/signup">
              Get Started Now <Crown className="w-6 h-6 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);