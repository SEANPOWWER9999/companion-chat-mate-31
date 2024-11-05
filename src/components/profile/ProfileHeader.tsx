import { ArrowLeft } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
}

export const ProfileHeader = ({ name }: ProfileHeaderProps) => {
  return (
    <div className="flex items-center mb-4">
      <ArrowLeft className="h-6 w-6" />
      <h1 className="text-xl font-bold ml-2">
        Meet <span className="text-hotbot-pink">{name}</span>
      </h1>
    </div>
  );
};