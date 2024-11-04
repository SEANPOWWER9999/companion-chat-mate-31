import { Settings, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const HowItWorks = () => (
  <section className="bg-white py-24">
    <div className="container mx-auto px-4 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-16 bg-gradient-to-r from-hotbot-pink to-hotbot-purple bg-clip-text text-transparent"
      >
        Time to Shine, Babe! ✨
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            icon: Settings,
            title: "1. Quick Setup 💅",
            description: "Post your ad and watch the messages flood in!"
          },
          {
            icon: Sparkles,
            title: "2. Add Your Magic ✨",
            description: "Set your style and let HOTBOT work its charm"
          },
          {
            icon: Heart,
            title: "3. Live Your Best Life 💖",
            description: "Focus on what matters while we handle the rest!"
          }
        ].map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-android border-2 border-pink-100
                     hover:shadow-lg transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-hotbot-pink to-hotbot-purple 
                         flex items-center justify-center mb-8 mx-auto border border-white/20">
              <feature.icon className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                        from-hotbot-pink to-hotbot-purple mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);