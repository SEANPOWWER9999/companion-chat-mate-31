import { NavBar } from "@/components/landing/NavBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ClosingSection } from "@/components/landing/ClosingSection";
import { ProfileSetup } from "@/components/landing/ProfileSetup";
import { SmsSection } from "@/components/landing/SmsSection";
import { AutomatedResponses } from "@/components/landing/AutomatedResponses";
import { AppointmentAlerts } from "@/components/landing/AppointmentAlerts";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <ClosingSection />
      <ProfileSetup />
      <SmsSection />
      <AutomatedResponses />
      <AppointmentAlerts />
      <WhyChooseUs />
    </div>
  );
};

export default Index;