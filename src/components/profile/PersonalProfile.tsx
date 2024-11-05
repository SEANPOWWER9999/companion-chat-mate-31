import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface PersonalProfileProps {
  bio: string;
  interests: string[];
  restrictions: string[];
  onChange?: (updates: { bio: string; interests: string[]; restrictions: string[] }) => void;
}

export const PersonalProfile = ({ bio, interests, restrictions, onChange }: PersonalProfileProps) => {
  if (onChange) {
    return (
      <div className="mb-4 space-y-4">
        <div>
          <h2 className="text-lg font-semibold">About Me</h2>
          <Textarea
            value={bio}
            onChange={(e) => onChange({ bio: e.target.value, interests, restrictions })}
            className="android-input min-h-[100px]"
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">Interests</h2>
          <Input
            value={interests.join(", ")}
            onChange={(e) => onChange({ bio, interests: e.target.value.split(", "), restrictions })}
            placeholder="Separate interests with comma"
            className="android-input"
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold">Restrictions</h2>
          <Textarea
            value={restrictions.join("\n")}
            onChange={(e) => onChange({ bio, interests, restrictions: e.target.value.split("\n").filter(r => r.trim()) })}
            placeholder="One restriction per line"
            className="android-input min-h-[100px]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4 space-y-4">
      <div>
        <h2 className="text-lg font-semibold">About Me</h2>
        <p className="text-gray-600">{bio}</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Interests</h2>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <span key={index} className="bg-pink-100 text-pink-800 text-sm px-2 py-1 rounded">
              {interest}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Restrictions</h2>
        <ul className="list-disc list-inside text-gray-600">
          {restrictions.map((restriction, index) => (
            <li key={index}>{restriction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};