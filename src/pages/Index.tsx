import { NavBar } from "@/components/landing/NavBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { SmsSection } from "@/components/landing/SmsSection";
import { AutomatedResponses } from "@/components/landing/AutomatedResponses";
import { AppointmentAlerts } from "@/components/landing/AppointmentAlerts";
import { ClosingSection } from "@/components/landing/ClosingSection";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Crown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900">
      <NavBar />
      <main className="relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')] 
             bg-cover bg-center opacity-10 pointer-events-none" />
        <div className="relative z-10">
          <HeroSection />
          <WhyChooseUs />
          <FeaturesGrid />
          <HowItWorks />
          <SmsSection />
          <AutomatedResponses />
          <AppointmentAlerts />
          <ClosingSection />
        </div>
      </main>
      <ChatWidget />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 left-4 z-50"
      >
        <Link to="/signup">
          <Button
            className="w-20 h-20 rounded-full bg-hotbot-gold hover:bg-hotbot-pink 
                     shadow-lg transition-all duration-300 flex items-center justify-center"
          >
            <Crown className="w-10 h-10" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Index;