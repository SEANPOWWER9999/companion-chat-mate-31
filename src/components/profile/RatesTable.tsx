import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Rate {
  duration: string;
  price: number;
  shots: number;
}

interface RatesTableProps {
  rates: Rate[];
  onSelect: (rate: Rate) => void;
}

export const RatesTable = ({ rates, onSelect }: RatesTableProps) => {
  const [rateType, setRateType] = useState<"outcall" | "incall">("outcall");
  const [selectedRate, setSelectedRate] = useState<Rate | null>(null);

  const handleSelect = (rate: Rate) => {
    setSelectedRate(rate);
    onSelect(rate);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">Rates</h2>
      <div className="flex space-x-4 mb-2">
        <Button
          variant="ghost"
          className={rateType === "outcall" ? "text-hotbot-pink font-semibold" : "text-gray-500"}
          onClick={() => setRateType("outcall")}
        >
          Outcall
        </Button>
        <Button
          variant="ghost"
          className={rateType === "incall" ? "text-hotbot-pink font-semibold" : "text-gray-500"}
          onClick={() => setRateType("incall")}
        >
          Incall
        </Button>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Duration</th>
            <th className="py-2">Price</th>
            <th className="py-2">Shots</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate) => (
            <tr
              key={rate.duration}
              className={selectedRate === rate ? "bg-pink-50" : ""}
            >
              <td className="py-2">{rate.duration}</td>
              <td className="py-2">$ {rate.price.toFixed(2)}</td>
              <td className="py-2">{rate.shots} shot{rate.shots > 1 ? "s" : ""}</td>
              <td className="py-2">
                <Button
                  variant="ghost"
                  className="text-hotbot-pink"
                  onClick={() => handleSelect(rate)}
                >
                  Select
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};