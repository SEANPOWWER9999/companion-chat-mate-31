import { Star } from "lucide-react";

export const Header = () => (
  <header className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 flex justify-between items-center">
    <h1 className="font-['Pacifico'] text-3xl">Time to Shine, Gorgeous! ✨</h1>
    <div className="flex items-center">
      <span className="text-lg mr-2">Online</span>
      <Star className="w-6 h-6 text-yellow-300 animate-pulse" />
    </div>
  </header>
);