import { NavBar } from "@/components/landing/NavBar";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { SmsSection } from "@/components/landing/SmsSection";
import { AutomatedResponses } from "@/components/landing/AutomatedResponses";
import { AppointmentAlerts } from "@/components/landing/AppointmentAlerts";
import { ClosingSection } from "@/components/landing/ClosingSection";
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Link to="/signup">
          <Button
            className="w-20 h-20 rounded-full bg-gradient-to-r from-hotbot-gold via-hotbot-pink to-hotbot-purple
                     hover:from-hotbot-pink hover:via-hotbot-purple hover:to-hotbot-gold
                     shadow-lg hover:shadow-xl transition-all duration-500 
                     flex flex-col items-center justify-center border-2 border-white gap-1"
          >
            <Crown className="w-8 h-8 text-white" />
            <span className="text-white text-sm font-bold">Sign Up</span>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Index;