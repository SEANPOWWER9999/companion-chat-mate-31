import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { BasicInfo } from "@/components/profile/BasicInfo";
import { ServicesSection } from "@/components/profile/ServicesSection";
import { RatesTable } from "@/components/profile/RatesTable";
import { AdditionalInfo } from "@/components/profile/AdditionalInfo";
import { Reviews } from "@/components/profile/Reviews";
import { HttpSmsInstructions } from "@/components/profile/HttpSmsInstructions";

const Profile = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

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
      <ProfileHeader name="Amanda" />
      
      <BasicInfo 
        bodyType="Slim"
        languages={["English (Fluent)", "Chinese (Average)", "Spanish (Average)", "French (Average)"]}
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
      
      <AdditionalInfo
        paymentMethod="Card"
        cancellationPolicy="None"
      />
      
      <Reviews reviews={[]} />
      
      <div className="flex justify-between mb-8">
        <Button
          variant="secondary"
          onClick={() => navigate(-1)}
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

      <HttpSmsInstructions />
    </div>
  );
};

export default Profile;