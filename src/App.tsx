import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Profile from "@/pages/Profile";
import AdminDashboard from "@/pages/AdminDashboard";
import Training from "@/pages/Training";
import AdminLogin from "@/pages/AdminLogin";
import TrainerLogin from "@/pages/TrainerLogin";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/training" element={<Training />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/trainer-login" element={<TrainerLogin />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;