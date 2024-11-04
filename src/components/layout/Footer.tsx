import { Heart, Calendar, DollarSign } from "lucide-react";

export const Footer = () => (
  <footer className="bg-pink-500 text-white p-4 flex justify-around items-center">
    <button className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
      <Heart className="w-5 h-5" />
      <span>Send a Flirt 💌</span>
    </button>
    <button className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
      <Calendar className="w-5 h-5" />
      <span>Book an Appointment 📅</span>
    </button>
    <button className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
      <DollarSign className="w-5 h-5" />
      <span>Get Paid 💰</span>
    </button>
  </footer>
);