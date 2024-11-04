import { NavBar } from "@/components/landing/NavBar";
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
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="relative">
        <div className="relative z-10 space-y-12 py-8">
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
            className="w-20 h-20 rounded-full bg-gradient-to-r from-hotbot-gold via-hotbot-pink to-hotbot-purple
                     hover:from-hotbot-pink hover:via-hotbot-purple hover:to-hotbot-gold
                     shadow-lg hover:shadow-xl transition-all duration-500 
                     flex items-center justify-center border-2 border-white"
          >
            <Crown className="w-10 h-10 text-white" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Index;