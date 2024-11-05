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
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { id } = useParams();
  const [profile, setProfile] = useState({
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
        onChange={(updates) => handleChange(updates)}
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