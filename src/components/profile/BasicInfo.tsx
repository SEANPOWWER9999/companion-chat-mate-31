import { Input } from "@/components/ui/input";

interface BasicInfoProps {
  bodyType: string;
  languages: string[];
  isEditing?: boolean;
  onChange?: (updates: { bodyType: string; languages: string[] }) => void;
}

export const BasicInfo = ({ bodyType, languages, isEditing, onChange }: BasicInfoProps) => {
  if (isEditing && onChange) {
    return (
      <>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Body Type</h2>
          <Input
            value={bodyType}
            onChange={(e) => onChange({ bodyType: e.target.value, languages })}
          />
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Languages</h2>
          <Input
            value={languages.join(", ")}
            onChange={(e) => onChange({ bodyType, languages: e.target.value.split(", ") })}
            placeholder="Separate languages with comma"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Body Type</h2>
        <p>{bodyType}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Languages</h2>
        <p>{languages.join(", ")}</p>
      </div>
    </>
  );
};