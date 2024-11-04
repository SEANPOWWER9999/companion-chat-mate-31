import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartBar } from "lucide-react";

const data = [
  { name: 'Mon', accuracy: 85 },
  { name: 'Tue', accuracy: 88 },
  { name: 'Wed', accuracy: 92 },
  { name: 'Thu', accuracy: 87 },
  { name: 'Fri', accuracy: 90 },
];

export const PerformanceMetrics = () => {
  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <ChartBar className="w-6 h-6 text-hotbot-purple" />
        Response Accuracy
      </h2>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="accuracy" fill="#FF5B93" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};