import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { LocationInfo } from "@/components/profile/LocationInfo";
import { BasicInfo } from "@/components/profile/BasicInfo";
import { PersonalProfile } from "@/components/profile/PersonalProfile";
import { ServicesSection } from "@/components/profile/ServicesSection";
import { RatesTable } from "@/components/profile/RatesTable";
import { BotStatistics } from "@/components/profile/BotStatistics";
import { AdditionalInfo } from "@/components/profile/AdditionalInfo";
import { Reviews } from "@/components/profile/Reviews";
import { HttpSmsInstructions } from "@/components/profile/HttpSmsInstructions";
import { Link } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // In a real app, you would fetch this data using the id parameter
  const profile = {
    name: "Amanda",
    city: "Los Angeles",
    area: "Downtown",
    bodyType: "Slim",
    languages: ["English (Fluent)", "Chinese (Average)", "Spanish (Average)", "French (Average)"],
    bio: "Hi, I'm Amanda! I love meeting new people and creating meaningful connections.",
    interests: ["Travel", "Art", "Music", "Fine Dining"],
    restrictions: [
      "No explicit content",
      "No aggressive behavior",
      "Respect boundaries"
    ],
    paymentMethod: "Card",
    cancellationPolicy: "None",
    botStats: {
      messageCount: 1234,
      freeTierEndsAt: "2024-04-01"
    }
  };

  const defaultRates = [
    { duration: "1h", price: 20.00, shots: 1 },
    { duration: "2h", price: 30.00, shots: 3 },
    { duration: "3h", price: 40.00, shots: 4 },
    { duration: "4h", price: 50.00, shots: 4 },
    { duration: "6h", price: 60.00, shots: 5 },
    { duration: "8h", price: 70.00, shots: 5 },
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      <ProfileHeader name={profile.name} />
      
      <LocationInfo 
        city={profile.city}
        area={profile.area}
      />
      
      <BasicInfo 
        bodyType={profile.bodyType}
        languages={profile.languages}
      />

      <PersonalProfile
        bio={profile.bio}
        interests={profile.interests}
        restrictions={profile.restrictions}
      />
      
      <ServicesSection
        selectedServices={selectedServices}
        isLocked={false}
        onServicesChange={setSelectedServices}
        onLockChange={() => {}}
      />
      
      <RatesTable
        rates={defaultRates}
        onSelect={() => {}}
      />

      <BotStatistics
        messageCount={profile.botStats.messageCount}
        freeTierEndsAt={profile.botStats.freeTierEndsAt}
      />
      
      <AdditionalInfo
        paymentMethod={profile.paymentMethod}
        cancellationPolicy={profile.cancellationPolicy}
      />
      
      <Reviews reviews={[]} />
      
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

      <HttpSmsInstructions />
    </div>
  );
};

export default Profile;