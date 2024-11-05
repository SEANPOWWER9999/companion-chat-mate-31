import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Profile {
  id: string;
  name: string;
  bodyType: string;
  languages: string[];
}

const profiles: Profile[] = [
  {
    id: "1",
    name: "Amanda",
    bodyType: "Slim",
    languages: ["English (Fluent)", "Chinese (Average)", "Spanish (Average)", "French (Average)"],
  },
  // Add more profiles as needed
];

const Profiles = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profiles</h1>
      <div className="space-y-4">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="p-4 border rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white"
            onClick={() => navigate(`/profile/${profile.id}`)}
          >
            <h2 className="text-xl font-semibold text-hotbot-pink">{profile.name}</h2>
            <p className="text-gray-600">Body Type: {profile.bodyType}</p>
            <p className="text-gray-600">Languages: {profile.languages.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profiles;