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
import { Link, useNavigate } from "react-router-dom";
import { Crown } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleCharlieClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Get click position relative to the element
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    // If click is in the last third of the element (where teal is), navigate
    if (x > width * 0.66) {
      navigate('/story');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavBar />
      <main className="relative flex-grow">
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

      {/* Sign Up Button */}
      <div className="relative pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-16 right-4 z-40"
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

      {/* Secret Charlie Banner */}
      <div 
        onClick={handleCharlieClick}
        className="w-full py-2 bg-gradient-to-r from-pink-300 via-purple-300 to-teal-300 cursor-pointer transition-all duration-500"
      >
        <p className="text-center text-xs font-dancing text-white">
          Charlie Love
        </p>
      </div>
    </div>
  );
};

export default Index;
