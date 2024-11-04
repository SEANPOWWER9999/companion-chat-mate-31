import { motion } from "framer-motion";
import { Clock, Zap, Crown, Sparkles, Heart, Star } from "lucide-react";

export const WhyChooseUs = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-hotbot-pink via-hotbot-purple to-hotbot-red">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white flex items-center justify-center gap-3">
          Why Choose The HOTBOT{" "}
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-10 h-10 text-hotbot-gold" />
          </motion.span>
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-pink-100 mb-8"
        >
          Babe, The HOTBOT is here to revolutionize your hustle! 🌈 It's like having a fierce girlfriend by your side, 
          cutting through the BS and keeping things fun! 🎉 Say goodbye to boring convos and hello to more free time!
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: Clock,
            title: "Save Time ⏰",
            description: "Automate those boring convos and focus on the fun stuff—like planning your next girls' night out! 🍹"
          },
          {
            icon: Zap,
            title: "Fast & Accurate ⚡",
            description: "Quick, spot-on responses to keep the right clients excited! Just like your bestie's perfect comeback! 😏"
          },
          {
            icon: Crown,
            title: "Efficient Management 👑",
            description: "Handle your appointments like the boss you are! No more double-booking or missing that cash! 💵"
          },
          {
            icon: Star,
            title: "Personal Touch 💝",
            description: "Keep it real with customized responses that feel like chatting with your BFF! 💕"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center group 
                     hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-hotbot-pink to-hotbot-purple rounded-full 
                       flex items-center justify-center text-white group-hover:shadow-lg"
            >
              <feature.icon className="w-8 h-8" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-hotbot-gold transition-colors">
              {feature.title}
            </h3>
            <p className="text-pink-100 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);