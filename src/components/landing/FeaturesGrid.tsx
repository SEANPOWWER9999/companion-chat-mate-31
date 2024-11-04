import { MessageCircle, Shield, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const FeaturesGrid = () => (
  <section className="py-20 px-4">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
      >
        Why Choose The HOTBOT
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: MessageCircle,
            title: "Save Time",
            description: "Automate client interactions so you can focus on the fun stuff!"
          },
          {
            icon: Shield,
            title: "Fast & Accurate",
            description: "Quick and spot-on responses to keep things moving!"
          },
          {
            icon: Sparkles,
            title: "Efficient Management",
            description: "Handle appointments like a pro with automated alerts!"
          },
          {
            icon: Heart,
            title: "Personal Touch",
            description: "Keep it real and personal with customized responses!"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center group hover:shadow-xl transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full 
                       flex items-center justify-center text-white"
            >
              <feature.icon className="w-8 h-8" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);