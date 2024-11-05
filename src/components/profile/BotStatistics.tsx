interface BotStatisticsProps {
  messageCount: number;
  freeTierEndsAt: string;
}

export const BotStatistics = ({ messageCount, freeTierEndsAt }: BotStatisticsProps) => {
  return (
    <div className="mb-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
      <h2 className="text-lg font-semibold mb-2">Bot Statistics</h2>
      <div className="space-y-2">
        <p className="text-gray-600">Messages Replied: <span className="font-medium">{messageCount}</span></p>
        <p className="text-gray-600">Free Tier Ends: <span className="font-medium">{freeTierEndsAt}</span></p>
      </div>
    </div>
  );
};