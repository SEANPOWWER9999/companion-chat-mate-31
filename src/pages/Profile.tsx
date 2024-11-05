import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SimpleHeader } from "@/components/profile/SimpleHeader";
import { ProfileBasicDetails } from "@/components/profile/ProfileBasicDetails";
import { LocationInfo } from "@/components/profile/LocationInfo";
import { BasicInfo } from "@/components/profile/BasicInfo";
import { PersonalProfile } from "@/components/profile/PersonalProfile";
import { ServicesSection } from "@/components/profile/ServicesSection";
import { RatesSection } from "@/components/profile/RatesSection";
import { HttpSmsSection } from "@/components/profile/HttpSmsSection";
import { ChatbotConfig } from "@/components/profile/ChatbotConfig";
import { BotStatistics } from "@/components/profile/BotStatistics";
import { AdditionalInfo } from "@/components/profile/AdditionalInfo";
import { Reviews } from "@/components/profile/Reviews";
import { motion } from "framer-motion";
import { ProfileSkeleton } from "@/components/profile/ProfileSkeleton";
import { useProfileData } from "@/hooks/useProfileData";
import { NavBar } from "@/components/landing/NavBar";
import { Header } from "@/components/layout/Header";

const Profile = () => {
  const navigate = useNavigate();
  const { profile, setProfile, isLoading, error } = useProfileData("current"); // Using a fixed ID for current user
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <NavBar />
      
      <div className="pt-20">
        <Header />
      </div>

      {isLoading ? (
        <div className="max-w-2xl mx-auto p-4">
          <ProfileSkeleton />
        </div>
      ) : error || !profile ? (
        <div className="max-w-2xl mx-auto p-8 text-center">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-pink-100">
            <h2 className="text-2xl font-semibold text-hotbot-pink mb-4">
              {error || "Profile Not Found"}
            </h2>
            <p className="text-gray-600 mb-6">
              Sorry, we couldn't find your profile.
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-gradient-hotbot text-white hover:opacity-90 transition-opacity"
            >
              Return Home
            </Button>
          </Card>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto p-4 space-y-6 pt-8"
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
                onClick={() => navigate('/')}
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
      )}
    </div>
  );
};

export default Profile;