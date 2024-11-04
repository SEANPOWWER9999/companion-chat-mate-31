import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Rates } from "@/types/profile";

interface RatesSectionProps {
  rates: Rates;
  isLocked: boolean;
  onRatesChange: (rates: Rates) => void;
  onLockChange: (locked: boolean) => void;
}

export const RatesSection = ({ rates, isLocked, onRatesChange, onLockChange }: RatesSectionProps) => {
  const handleRateChange = (duration: keyof Rates, type: 'incall' | 'outcall', value: string) => {
    onRatesChange({
      ...rates,
      [duration]: {
        ...rates[duration],
        [type]: value
      }
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold bordered-title">Rates</h2>
      {(Object.keys(rates) as Array<keyof Rates>).map((duration) => (
        <div key={duration} className="space-y-2">
          <Label>{duration}</Label>
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Incall Rate"
              value={rates[duration].incall || ''}
              onChange={(e) => handleRateChange(duration, 'incall', e.target.value)}
              disabled={isLocked}
            />
            <Input
              placeholder="Outcall Rate"
              value={rates[duration].outcall || ''}
              onChange={(e) => handleRateChange(duration, 'outcall', e.target.value)}
              disabled={isLocked}
            />
          </div>
        </div>
      ))}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="lock-rates"
          checked={isLocked}
          onCheckedChange={(checked) => onLockChange(checked as boolean)}
        />
        <Label htmlFor="lock-rates">Lock Rates</Label>
      </div>
    </div>
  );
};