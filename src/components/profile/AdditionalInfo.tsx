import { Input } from "@/components/ui/input";

interface AdditionalInfoProps {
  paymentMethod: string;
  cancellationPolicy: string;
  onChange?: (updates: { paymentMethod: string; cancellationPolicy: string }) => void;
}

export const AdditionalInfo = ({ paymentMethod, cancellationPolicy, onChange }: AdditionalInfoProps) => {
  if (onChange) {
    return (
      <>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Payment Method</h2>
          <Input
            value={paymentMethod}
            onChange={(e) => onChange({ paymentMethod: e.target.value, cancellationPolicy })}
            className="android-input"
          />
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Cancellation Policy</h2>
          <Input
            value={cancellationPolicy}
            onChange={(e) => onChange({ paymentMethod, cancellationPolicy: e.target.value })}
            className="android-input"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Payment Method</h2>
        <p>{paymentMethod}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Cancellation Policy</h2>
        <p>Cancellation charge: {cancellationPolicy}</p>
      </div>
    </>
  );
};