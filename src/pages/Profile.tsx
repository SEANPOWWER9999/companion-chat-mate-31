import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SimpleHeader } from "@/components/profile/SimpleHeader";
import { ProfileBasicDetails } from "@/components/profile/ProfileBasicDetails";
import { LocationInfo } from "@/components/profile/LocationInfo";
import { BasicInfo } from "@/components/profile/BasicInfo";
import { PersonalProfile } from "@/components/profile/PersonalProfile";
import { ServicesSection } from "@/components/profile/ServicesSection";
import { RatesSection } from "@/components/profile/RatesSection";
import { BotStatistics } from "@/components/profile/BotStatistics";
import { AdditionalInfo } from "@/components/profile/AdditionalInfo";
import { Reviews } from "@/components/profile/Reviews";
import { ChatbotConfig } from "@/components/profile/ChatbotConfig";
import { HttpSmsSection } from "@/components/profile/HttpSmsSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ProfileSkeleton } from "@/components/profile/ProfileSkeleton";
import { useProfileData } from "@/hooks/useProfileData";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const { profile, setProfile, isLoading } = useProfileData(id);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <ProfileSkeleton />
      </div>
    );
  }

  if (!profile) {
    toast({
      title: "Error",
      description: "Profile not found",
      variant: "destructive",
    });
    return (
      <div className="max-w-2xl mx-auto p-4 text-center">
        <h2 className="text-xl font-semibold mb-4">Profile not found</h2>
        <Button onClick={() => navigate('/profiles')}>Back to Profiles</Button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-4 space-y-6"
    >
      <SimpleHeader onBack={() => navigate(-1)} />
      
      <Card className="p-6 space-y-6 bg-gradient-to-br from-white to-pink-50 border-pink-100">
        <ProfileBasicDetails
          name={profile.name || ''}
          age={profile.age || ''}
          bodyType={profile.bodyType}
          onChange={(updates) => setProfile({ ...profile, ...updates })}
        />
        
        <LocationInfo 
          city={profile.city}
          area={profile.area}
          onChange={(updates) => setProfile({ ...profile, ...updates })}
        />
        
        <BasicInfo 
          bodyType={profile.bodyType}
          languages={profile.languages}
          onChange={(updates) => setProfile({ ...profile, ...updates })}
        />

        <PersonalProfile
          bio={profile.bio}
          interests={profile.interests}
          restrictions={profile.restrictions}
          onChange={(updates) => setProfile({ ...profile, ...updates })}
        />
      </Card>

      <ServicesSection
        selectedServices={selectedServices}
        isLocked={false}
        onServicesChange={setSelectedServices}
        onLockChange={() => {}}
      />
      
      <RatesSection
        rates={profile.rates}
        isLocked={false}
        onRatesChange={(rates) => setProfile({ ...profile, rates })}
        onLockChange={() => {}}
      />

      <HttpSmsSection />

      <ChatbotConfig
        character={profile.botConfig.character}
        knowledge={profile.botConfig.knowledge}
        style={profile.botConfig.style}
        onConfigChange={(botConfig) => setProfile({ ...profile, botConfig })}
      />

      <BotStatistics
        messageCount={profile.botStats.messageCount}
        freeTierEndsAt={profile.botStats.freeTierEndsAt}
      />

      <AdditionalInfo
        paymentMethod={profile.paymentMethod}
        cancellationPolicy={profile.cancellationPolicy}
        onChange={(updates) => setProfile({ ...profile, ...updates })}
      />
      
      <Reviews reviews={[]} />
      
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