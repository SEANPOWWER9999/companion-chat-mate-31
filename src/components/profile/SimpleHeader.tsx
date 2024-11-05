interface SimpleHeaderProps {
  onBack: () => void;
}

export const SimpleHeader = ({ onBack }: SimpleHeaderProps) => {
  return (
    <div className="flex items-center mb-4">
      <button onClick={onBack} className="text-gray-600 hover:text-gray-800">
        ←
      </button>
    </div>
  );
};