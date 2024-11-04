import { NavBar } from "@/components/landing/NavBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProfileSetup } from "@/components/landing/ProfileSetup";
import { SmsSection } from "@/components/landing/SmsSection";
import { AutomatedResponses } from "@/components/landing/AutomatedResponses";
import { AppointmentAlerts } from "@/components/landing/AppointmentAlerts";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { ClosingSection } from "@/components/landing/ClosingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <ProfileSetup />
      <SmsSection />
      <AutomatedResponses />
      <AppointmentAlerts />
      <WhyChooseUs />
      <ClosingSection />
    </div>
  );
};

export default Index;