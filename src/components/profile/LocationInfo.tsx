interface LocationInfoProps {
  city: string;
  area?: string;
}

export const LocationInfo = ({ city, area }: LocationInfoProps) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">Location</h2>
      <p className="text-gray-600">{city}{area ? `, ${area}` : ''}</p>
    </div>
  );
};