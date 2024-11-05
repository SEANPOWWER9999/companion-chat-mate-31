import { Input } from "@/components/ui/input";

interface BasicInfoProps {
  bodyType: string;
  languages: string[];
  onChange?: (updates: { bodyType: string; languages: string[] }) => void;
}

export const BasicInfo = ({ bodyType, languages, onChange }: BasicInfoProps) => {
  if (onChange) {
    return (
      <>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Body Type</h2>
          <Input
            value={bodyType}
            onChange={(e) => onChange({ bodyType: e.target.value, languages })}
            className="android-input"
            placeholder="Enter body type"
          />
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Languages</h2>
          <Input
            value={languages.join(", ")}
            onChange={(e) => onChange({ bodyType, languages: e.target.value.split(", ") })}
            placeholder="Separate languages with comma"
            className="android-input"
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