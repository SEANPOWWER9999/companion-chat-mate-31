import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import AdminDashboard from "@/pages/AdminDashboard";
import Training from "@/pages/Training";
import TrainerLogin from "@/pages/TrainerLogin";
import ChatSignup from "@/pages/ChatSignup";
import HotBotStory from "@/pages/HotBotStory";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<ChatSignup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/training" element={<Training />} />
        <Route path="/trainer-login" element={<TrainerLogin />} />
        <Route path="/story" element={<HotBotStory />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;