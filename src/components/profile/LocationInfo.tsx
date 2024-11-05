import { Input } from "@/components/ui/input";

interface LocationInfoProps {
  city: string;
  area?: string;
  onChange?: (updates: { city: string; area?: string }) => void;
}

export const LocationInfo = ({ city, area, onChange }: LocationInfoProps) => {
  if (onChange) {
    return (
      <div className="mb-4 space-y-2">
        <h2 className="text-lg font-semibold">Location</h2>
        <Input
          placeholder="City"
          value={city}
          onChange={(e) => onChange({ city: e.target.value, area })}
          className="android-input"
        />
        <Input
          placeholder="Area (optional)"
          value={area || ''}
          onChange={(e) => onChange({ city, area: e.target.value })}
          className="android-input"
        />
      </div>
    );
  }

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">Location</h2>
      <p className="text-gray-600">{city}{area ? `, ${area}` : ''}</p>
    </div>
  );
};