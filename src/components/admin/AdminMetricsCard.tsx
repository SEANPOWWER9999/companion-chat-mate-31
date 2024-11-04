import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AdminMetricsCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  trend: string;
}

export const AdminMetricsCard = ({ title, value, icon: Icon, trend }: AdminMetricsCardProps) => {
  const isPositiveTrend = trend.startsWith("+");

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-6 shadow-lg border border-pink-100"
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="bg-pink-100 p-2 rounded-lg">
          <Icon className="w-6 h-6 text-hotbot-pink" />
        </div>
      </div>
      <div className={`mt-4 text-sm ${isPositiveTrend ? 'text-green-500' : 'text-red-500'}`}>
        {trend} from last month
      </div>
    </motion.div>
  );
};