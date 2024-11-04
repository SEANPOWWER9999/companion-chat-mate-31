import { motion } from "framer-motion";
import { Clock, Zap, Calendar, Sparkles } from "lucide-react";

export const Features = () => {
  const features = [
    { icon: Clock, title: "Save Time", description: "Focus on the fun stuff!" },
    { icon: Zap, title: "Fast & Accurate", description: "Quick, flirty replies!" },
    { icon: Calendar, title: "Smart Management", description: "Never miss a beat!" },
    { icon: Sparkles, title: "Personal Touch", description: "Keep it real & sexy!" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
    >
      {features.map((Feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl"
        >
          <Feature.icon className="w-8 h-8 text-pink-400 mr-3" />
          <div>
            <h3 className="font-bold text-gray-800">{Feature.title}</h3>
            <p className="text-gray-600">{Feature.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};