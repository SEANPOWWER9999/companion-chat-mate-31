import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import AdminDashboard from "@/pages/AdminDashboard";
import Training from "@/pages/Training";
import Signup from "@/pages/Signup"; // Updated import
import HotBotStory from "@/pages/HotBotStory";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Updated route */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/training" element={<Training />} />
        <Route path="/story" element={<HotBotStory />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;