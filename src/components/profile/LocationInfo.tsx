interface LocationInfoProps {
  city: string;
  area?: string;
  isEditing?: boolean;
  onChange?: (updates: { city: string; area?: string }) => void;
}

import { Input } from "@/components/ui/input";

export const LocationInfo = ({ city, area, isEditing, onChange }: LocationInfoProps) => {
  if (isEditing && onChange) {
    return (
      <div className="mb-4 space-y-2">
        <h2 className="text-lg font-semibold">Location</h2>
        <Input
          placeholder="City"
          value={city}
          onChange={(e) => onChange({ city: e.target.value, area })}
        />
        <Input
          placeholder="Area (optional)"
          value={area || ''}
          onChange={(e) => onChange({ city, area: e.target.value })}
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