import { Settings, Sparkles, Heart } from "lucide-react";

export const HowItWorks = () => (
  <section className="py-20 px-4 bg-gradient-to-b from-transparent to-hotbot-dark/50">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-hotbot-secondary to-hotbot-primary">
        Time to Shine, Babe! ✨
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-hotbot-primary/20 flex items-center justify-center mb-6 animate-float">
            <Settings className="w-8 h-8 text-hotbot-secondary" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">1. Quick Setup 💅</h3>
          <p className="text-white/70">Link your number and set your preferences in minutes</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-hotbot-primary/20 flex items-center justify-center mb-6 animate-float">
            <Sparkles className="w-8 h-8 text-hotbot-accent" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">2. Add Your Magic ✨</h3>
          <p className="text-white/70">Set your style, tone, and screening preferences</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-hotbot-primary/20 flex items-center justify-center mb-6 animate-float">
            <Heart className="w-8 h-8 text-hotbot-primary" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">3. Start Booking 💋</h3>
          <p className="text-white/70">Let HotBot handle the chats while you focus on clients</p>
        </div>
      </div>
    </div>
  </section>
);