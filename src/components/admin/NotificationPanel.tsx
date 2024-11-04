import { Bell } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export const NotificationPanel = () => {
  const notifications = [
    { id: 1, message: "New trainer application received", time: "2 hours ago" },
    { id: 2, message: "Response accuracy improved by 5%", time: "4 hours ago" },
    { id: 3, message: "System update completed", time: "1 day ago" },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Bell className="w-6 h-6 text-hotbot-purple" />
        Notifications
      </h2>
      <ScrollArea className="h-[300px]">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <p className="text-gray-800">{notification.message}</p>
              <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};