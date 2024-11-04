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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900">
      <NavBar />
      <main className="relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')] 
             bg-cover bg-center opacity-10 pointer-events-none" />
        <div className="relative z-10">
          <WhyChooseUs />
          <HeroSection />
          <FeaturesGrid />
          <HowItWorks />
          <SmsSection />
          <AutomatedResponses />
          <AppointmentAlerts />
          <ClosingSection />
        </div>
      </main>
      <ChatWidget />
    </div>
  );
};

export default Index;