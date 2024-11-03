import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const AVAILABLE_SERVICES = [
  'Travel', 'Dinner', 'Intimacy', 'Companionship', 'Fetish', 'BDSM', 'GFE',
  'Role-play', 'Massage', 'Conversation', 'Dancing', 'Couples', 'Overnight',
  'Fitness', 'Virtual', 'Party', 'Weekend', 'Shopping', 'Concerts', 'Outdoors',
  'Wine', 'Culture', 'Education', 'Photography', 'Cooking'
] as const;

interface ServicesSectionProps {
  selectedServices: string[];
  isLocked: boolean;
  onServicesChange: (services: string[]) => void;
  onLockChange: (locked: boolean) => void;
}

export const ServicesSection = ({
  selectedServices,
  isLocked,
  onServicesChange,
  onLockChange
}: ServicesSectionProps) => {
  const toggleService = (service: string) => {
    if (isLocked) return;
    
    if (selectedServices.includes(service)) {
      onServicesChange(selectedServices.filter(s => s !== service));
    } else {
      onServicesChange([...selectedServices, service]);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold bordered-title">Services</h2>
      <div className="flex flex-wrap gap-2">
        {AVAILABLE_SERVICES.map((service) => (
          <Badge
            key={service}
            variant={selectedServices.includes(service) ? "default" : "outline"}
            className={`cursor-pointer ${
              selectedServices.includes(service) 
                ? 'bg-pink-500 hover:bg-pink-600' 
                : 'border-pink-500 text-pink-500'
            }`}
            onClick={() => toggleService(service)}
          >
            {service}
          </Badge>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="lock-services"
          checked={isLocked}
          onCheckedChange={(checked) => onLockChange(checked as boolean)}
        />
        <Label htmlFor="lock-services">Lock Services</Label>
      </div>
    </div>
  );
};