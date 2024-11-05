interface AdditionalInfoProps {
  paymentMethod: string;
  cancellationPolicy: string;
}

export const AdditionalInfo = ({ paymentMethod, cancellationPolicy }: AdditionalInfoProps) => {
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