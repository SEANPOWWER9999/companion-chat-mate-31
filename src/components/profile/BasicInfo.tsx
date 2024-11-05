interface BasicInfoProps {
  bodyType: string;
  languages: string[];
}

export const BasicInfo = ({ bodyType, languages }: BasicInfoProps) => {
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