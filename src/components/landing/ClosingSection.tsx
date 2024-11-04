import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Crown } from "lucide-react";

export const ClosingSection = () => (
  <section className="bg-white py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-900">AI-Powered</h3>
            <p className="text-gray-600">Experience the power of AI with our cutting-edge technology.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Trending Topics</h3>
            <p className="text-gray-600">Stay updated with the latest trends and hot topics.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Community</h3>
            <p className="text-gray-600">Join a vibrant community of like-minded individuals.</p>
          </motion.div>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-12 text-center"
        >
          <Button asChild className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-8 rounded-full">
            <Link to="/signup">
              Get Started Now <Crown className="w-6 h-6 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);