import { NavBar } from "@/components/landing/NavBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { HowItWorks } from "@/components/landing/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-hotbot-dark via-hotbot-primary/20 to-hotbot-dark">
      <NavBar />
      <HeroSection />
      <FeaturesGrid />
      <HowItWorks />
    </div>
  );
};

export default Index;