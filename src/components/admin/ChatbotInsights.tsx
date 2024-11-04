import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Brain } from "lucide-react";

const data = [
  { name: 'Week 1', responses: 240 },
  { name: 'Week 2', responses: 320 },
  { name: 'Week 3', responses: 280 },
  { name: 'Week 4', responses: 400 },
];

export const ChatbotInsights = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Brain className="w-6 h-6 text-hotbot-purple" />
        Chatbot Performance
      </h2>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="responses" stroke="#FF5B93" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};