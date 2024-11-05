import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProfileBasicDetailsProps {
  name: string;
  age: string;
  bodyType: string;
  onChange: (updates: { name?: string; age?: string; bodyType?: string }) => void;
}

export const ProfileBasicDetails = ({ name, age, bodyType, onChange }: ProfileBasicDetailsProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => onChange({ name: e.target.value })}
          className="android-input"
        />
      </div>
      
      <div>
        <Input
          placeholder="Age"
          type="number"
          value={age}
          onChange={(e) => onChange({ age: e.target.value })}
          className="android-input"
        />
      </div>
      
      <div>
        <Select value={bodyType} onValueChange={(value) => onChange({ bodyType: value })}>
          <SelectTrigger className="android-input">
            <SelectValue placeholder="Select body type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="slim">Slim</SelectItem>
            <SelectItem value="athletic">Athletic</SelectItem>
            <SelectItem value="curvy">Curvy</SelectItem>
            <SelectItem value="plus-size">Plus Size</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};