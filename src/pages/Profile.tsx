import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { LocationInfo } from "@/components/profile/LocationInfo";
import { BasicInfo } from "@/components/profile/BasicInfo";
import { PersonalProfile } from "@/components/profile/PersonalProfile";
import { ServicesSection } from "@/components/profile/ServicesSection";
import { RatesSection } from "@/components/profile/RatesSection";
import { BotStatistics } from "@/components/profile/BotStatistics";
import { AdditionalInfo } from "@/components/profile/AdditionalInfo";
import { Reviews } from "@/components/profile/Reviews";
import { ChatbotConfig } from "@/components/profile/ChatbotConfig";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { id } = useParams();
  
  const [profile, setProfile] = useState({
    name: "Amanda",
    city: "Los Angeles",
    area: "Downtown",
    bodyType: "Slim",
    languages: ["English", "Spanish"],
    bio: "Hi, I'm Amanda! I love meeting new people and creating meaningful connections.",
    interests: ["Travel", "Art", "Music"],
    restrictions: ["No explicit content", "Respect boundaries"],
    paymentMethod: "Card",
    cancellationPolicy: "24h notice required",
    rates: {
      "30min": { incall: "150", outcall: "200" },
      "1hour": { incall: "250", outcall: "300" },
      "overnight": { incall: "1000", outcall: "1200" }
    },
    botConfig: {
      character: "Friendly and professional",
      knowledge: "Art, travel, culture",
      style: "Casual but sophisticated"
    },
    botStats: {
      messageCount: 1234,
      freeTierEndsAt: "2024-04-01"
    }
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleChange = async (updates: Partial<typeof profile>) => {
    const newProfile = { ...profile, ...updates };
    setProfile(newProfile);
    
    try {
      const { error } = await supabase
        .from('profile_settings')
        .update({
          name: newProfile.name,
          city: newProfile.city,
          area: newProfile.area,
          body_type: newProfile.bodyType,
          languages: newProfile.languages,
          bio: newProfile.bio,
          interests: newProfile.interests,
          restrictions: newProfile.restrictions,
          payment_method: newProfile.paymentMethod,
          cancellation_policy: newProfile.cancellationPolicy,
          rates: newProfile.rates,
          chatbot_config: newProfile.botConfig
        })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <ProfileHeader name={profile.name} />
      
      <Card className="p-6 space-y-6">
        <LocationInfo 
          city={profile.city}
          area={profile.area}
          onChange={(updates) => handleChange(updates)}
        />
        
        <BasicInfo 
          bodyType={profile.bodyType}
          languages={profile.languages}
          onChange={(updates) => handleChange(updates)}
        />

        <PersonalProfile
          bio={profile.bio}
          interests={profile.interests}
          restrictions={profile.restrictions}
          onChange={(updates) => handleChange(updates)}
        />
      </Card>
      
      <Card className="p-6">
        <ServicesSection
          selectedServices={selectedServices}
          isLocked={false}
          onServicesChange={setSelectedServices}
          onLockChange={() => {}}
        />
      </Card>
      
      <Card className="p-6">
        <RatesSection
          rates={profile.rates}
          isLocked={false}
          onRatesChange={(rates) => handleChange({ rates })}
          onLockChange={() => {}}
        />
      </Card>

      <Card className="p-6">
        <ChatbotConfig
          character={profile.botConfig.character}
          knowledge={profile.botConfig.knowledge}
          style={profile.botConfig.style}
          onConfigChange={(botConfig) => handleChange({ botConfig })}
        />
      </Card>

      <Card className="p-6">
        <BotStatistics
          messageCount={profile.botStats.messageCount}
          freeTierEndsAt={profile.botStats.freeTierEndsAt}
        />
      </Card>
      
      <Card className="p-6">
        <AdditionalInfo
          paymentMethod={profile.paymentMethod}
          cancellationPolicy={profile.cancellationPolicy}
          onChange={(updates) => handleChange(updates)}
        />
      </Card>
      
      <Card className="p-6">
        <Reviews reviews={[]} />
      </Card>
      
      <div className="flex flex-col gap-4 mb-8">
        <Link 
          to="/subscription" 
          className="text-center text-hotbot-pink hover:text-hotbot-purple transition-colors"
        >
          Upgrade Your Plan
        </Link>
        
        <Button
          className="w-full bg-hotbot-pink hover:bg-hotbot-purple text-white"
          onClick={() => {}}
        >
          Start Chat Bot
        </Button>
        
        <div className="flex justify-between">
          <Button
            variant="secondary"
            onClick={() => navigate('/profiles')}
          >
            Back
          </Button>
          <Button
            className="bg-hotbot-pink text-white"
            onClick={() => {}}
          >
            Send request
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;