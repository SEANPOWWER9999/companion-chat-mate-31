import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Rates {
  "30min": { incall: string | null; outcall: string | null };
  "1hour": { incall: string | null; outcall: string | null };
  "overnight": { incall: string | null; outcall: string | null };
}

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

  const setDefaultRate = (type: 'incall' | 'outcall', value: string) => {
    const newRates = { ...rates };
    (Object.keys(rates) as Array<keyof Rates>).forEach((duration) => {
      newRates[duration][type] = value;
    });
    onRatesChange(newRates);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gradient">Rates</h2>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="lock-rates"
            checked={isLocked}
            onCheckedChange={(checked) => onLockChange(checked as boolean)}
          />
          <Label htmlFor="lock-rates">Lock Rates</Label>
        </div>
      </div>

      <Tabs defaultValue="incall" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gradient-hotbot">
          <TabsTrigger value="incall" className="data-[state=active]:bg-white/20">Incall</TabsTrigger>
          <TabsTrigger value="outcall" className="data-[state=active]:bg-white/20">Outcall</TabsTrigger>
        </TabsList>
        
        <TabsContent value="incall" className="space-y-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full mb-4 border-hotbot-pink text-hotbot-pink hover:bg-hotbot-pink/10">
                Set Default Incall Rate
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gradient-to-br from-white to-pink-50">
              <DialogHeader>
                <DialogTitle>Set Default Incall Rate</DialogTitle>
              </DialogHeader>
              <Input
                placeholder="Enter default rate"
                onChange={(e) => setDefaultRate('incall', e.target.value)}
                className="android-input"
              />
            </DialogContent>
          </Dialog>
          
          {(Object.keys(rates) as Array<keyof Rates>).map((duration) => (
            <div key={duration} className="space-y-2">
              <Label>{duration}</Label>
              <Input
                placeholder="Rate"
                value={rates[duration].incall || ''}
                onChange={(e) => handleRateChange(duration, 'incall', e.target.value)}
                disabled={isLocked}
                className="android-input"
              />
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="outcall" className="space-y-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full mb-4 border-hotbot-pink text-hotbot-pink hover:bg-hotbot-pink/10">
                Set Default Outcall Rate
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gradient-to-br from-white to-pink-50">
              <DialogHeader>
                <DialogTitle>Set Default Outcall Rate</DialogTitle>
              </DialogHeader>
              <Input
                placeholder="Enter default rate"
                onChange={(e) => setDefaultRate('outcall', e.target.value)}
                className="android-input"
              />
            </DialogContent>
          </Dialog>

          {(Object.keys(rates) as Array<keyof Rates>).map((duration) => (
            <div key={duration} className="space-y-2">
              <Label>{duration}</Label>
              <Input
                placeholder="Rate"
                value={rates[duration].outcall || ''}
                onChange={(e) => handleRateChange(duration, 'outcall', e.target.value)}
                disabled={isLocked}
                className="android-input"
              />
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};