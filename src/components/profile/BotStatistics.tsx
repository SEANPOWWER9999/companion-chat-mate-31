import { Card } from "@/components/ui/card";
import { format } from "date-fns";

interface BotStatisticsProps {
  messageCount: number;
  freeTierEndsAt: string;
}

export const BotStatistics = ({ messageCount, freeTierEndsAt }: BotStatisticsProps) => {
  const formattedDate = format(new Date(freeTierEndsAt), 'MMM dd, yyyy');
  const daysLeft = Math.ceil((new Date(freeTierEndsAt).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gradient">Bot Statistics</h2>
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-gradient-to-br from-white to-pink-50 border-pink-100">
          <div className="text-3xl font-bold text-hotbot-pink mb-2">{messageCount}</div>
          <div className="text-sm text-gray-600">Messages Replied</div>
        </Card>
        
        <Card className="p-4 bg-gradient-to-br from-white to-pink-50 border-pink-100">
          <div className="text-xl font-bold text-hotbot-purple mb-2">{formattedDate}</div>
          <div className="text-sm text-gray-600">Free Tier Ends</div>
          <div className="text-xs text-hotbot-pink mt-1">
            {daysLeft > 0 ? `${daysLeft} days remaining` : 'Expired'}
          </div>
        </Card>
      </div>
    </div>
  );
};