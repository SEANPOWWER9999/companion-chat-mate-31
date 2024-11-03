import { Button } from "@/components/ui/button";

interface StatusToggleProps {
  status: string;
  onStatusChange: (status: string) => void;
}

export const StatusToggle = ({ status, onStatusChange }: StatusToggleProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant={status === 'incall' ? 'default' : 'outline'}
        onClick={() => onStatusChange('incall')}
        className={status === 'incall' ? 'bg-pink-500 hover:bg-pink-600' : ''}
      >
        Incall
      </Button>
      <Button
        variant={status === 'outcall' ? 'default' : 'outline'}
        onClick={() => onStatusChange('outcall')}
        className={status === 'outcall' ? 'bg-pink-500 hover:bg-pink-600' : ''}
      >
        Outcall
      </Button>
      <Button
        variant={status === 'both' ? 'default' : 'outline'}
        onClick={() => onStatusChange('both')}
        className={status === 'both' ? 'bg-pink-500 hover:bg-pink-600' : ''}
      >
        Both
      </Button>
      <Button
        variant={status === 'offline' ? 'default' : 'outline'}
        onClick={() => onStatusChange('offline')}
        className={status === 'offline' ? 'bg-pink-500 hover:bg-pink-600' : ''}
      >
        Offline
      </Button>
    </div>
  );
};