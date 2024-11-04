import { Star } from "lucide-react";

export const Header = () => (
  <header className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 flex justify-between items-center">
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl mb-2">Time to Shine, Gorgeous! ✨</h1>
      <p className="text-sm opacity-90">
        You just posted your ad, and now your phone's blowing up—ugh, here we go again! But don't sweat it; that's where The HOTBOT steps in.
      </p>
    </div>
    <div className="flex items-center">
      <span className="text-lg mr-2">Online</span>
      <Star className="w-6 h-6 text-yellow-300 animate-pulse" />
    </div>
  </header>
);