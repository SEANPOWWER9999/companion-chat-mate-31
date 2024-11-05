import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import { motion } from "framer-motion";

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-4 space-y-6"
    >
      <ProfileHeader name={profile.name} />
      
      <Card className="p-6 space-y-6 bg-gradient-to-br from-white to-pink-50 border-pink-100">
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
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white to-pink-50 border-pink-100">
          <ServicesSection
            selectedServices={selectedServices}
            isLocked={false}
            onServicesChange={setSelectedServices}
            onLockChange={() => {}}
          />
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white to-pink-50 border-pink-100">
          <RatesSection
            rates={profile.rates}
            isLocked={false}
            onRatesChange={(rates) => handleChange({ rates })}
            onLockChange={() => {}}
          />
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white to-pink-50 border-pink-100">
          <ChatbotConfig
            character={profile.botConfig.character}
            knowledge={profile.botConfig.knowledge}
            style={profile.botConfig.style}
            onConfigChange={(botConfig) => handleChange({ botConfig })}
          />
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white to-pink-50 border-pink-100">
          <BotStatistics
            messageCount={profile.botStats.messageCount}
            freeTierEndsAt={profile.botStats.freeTierEndsAt}
          />
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white to-pink-50 border-pink-100">
          <AdditionalInfo
            paymentMethod={profile.paymentMethod}
            cancellationPolicy={profile.cancellationPolicy}
            onChange={(updates) => handleChange(updates)}
          />
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white to-pink-50 border-pink-100">
          <Reviews reviews={[]} />
        </Card>
      </motion.div>
      
      <motion.div 
        className="flex flex-col gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Link 
          to="/subscription" 
          className="text-center text-hotbot-pink hover:text-hotbot-purple transition-colors"
        >
          Upgrade Your Plan
        </Link>
        
        <Button
          className="w-full bg-gradient-hotbot text-white hover:opacity-90 transition-opacity"
          onClick={() => {}}
        >
          Start Chat Bot
        </Button>
        
        <div className="flex justify-between gap-4">
          <Button
            variant="outline"
            className="flex-1 border-hotbot-pink text-hotbot-pink hover:bg-hotbot-pink/10"
            onClick={() => navigate('/profiles')}
          >
            Back
          </Button>
          <Button
            className="flex-1 bg-gradient-hotbot text-white hover:opacity-90 transition-opacity"
            onClick={() => {}}
          >
            Send request
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Profile;