import { NavBar } from "@/components/landing/NavBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ClosingSection } from "@/components/landing/ClosingSection";
import { SmsSection } from "@/components/landing/SmsSection";
import { AutomatedResponses } from "@/components/landing/AutomatedResponses";
import { AppointmentAlerts } from "@/components/landing/AppointmentAlerts";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <NavBar />
      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/50 pointer-events-none" />
        <HeroSection />
        <SmsSection />
        <AutomatedResponses />
        <AppointmentAlerts />
        <WhyChooseUs />
        <ClosingSection />
      </main>
    </div>
  );
};

export default Index;