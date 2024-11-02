import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Heart, Rocket, Gem } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-100 via-indigo-100 to-cyan-100">
      {/* Navigation Bar */}
      <nav className="bg-white/60 supports-[backdrop-filter]:bg-white/20 backdrop-blur-xl border-b border-white/10 p-4 fixed w-full top-0 z-10 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300">
            User Private Chat
          </Link>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to="/" className="text-gray-800 hover:text-pink-600 transition-colors">Home</Link>
            <Link to="/login" className="text-gray-800 hover:text-pink-600 transition-colors">Login</Link>
            <Link to="/signup" className="text-gray-800 hover:text-pink-600 transition-colors">Sign Up</Link>
            <Link to="/subscription" className="text-gray-800 hover:text-pink-600 transition-colors">Subscription</Link>
            <Link to="/profile" className="text-gray-800 hover:text-pink-600 transition-colors">Profile</Link>
            <Link to="/analytics" className="text-gray-800 hover:text-pink-600 transition-colors">Analytics</Link>
            <Link to="/preferences" className="text-gray-800 hover:text-pink-600 transition-colors">Preferences</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 pt-32 md:pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-gradient-conic from-pink-500/40 via-purple-500/40 to-indigo-500/40 rounded-full transform -translate-y-1/2"></div>
              <h1 className="relative text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 leading-tight">
                Welcome to User Private Chat
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience secure and efficient communication with our advanced chatbot service. 
              Perfect for managing profiles, client communications, and streamlined bookings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-indigo-600 hover:to-pink-600 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 transform">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-2 border-pink-600 text-pink-600 hover:bg-pink-50 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="group border-none bg-white/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Star className="w-12 h-12 text-pink-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-gray-800">Profile Management</CardTitle>
                <CardDescription className="text-gray-600">Easily manage your services, rates, and availability in one place.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-none bg-white/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Heart className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-gray-800">Client Communication</CardTitle>
                <CardDescription className="text-gray-600">Seamless chat interface for efficient client interactions.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-none bg-white/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Rocket className="w-12 h-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-gray-800">Booking System</CardTitle>
                <CardDescription className="text-gray-600">Streamlined booking management and scheduling tools.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-none bg-white/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Gem className="w-12 h-12 text-pink-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-gray-800">Premium Security</CardTitle>
                <CardDescription className="text-gray-600">Advanced encryption and privacy protection for your data.</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Why Choose Us Section */}
          <Card className="border-none shadow-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">Why Choose Us?</CardTitle>
              <CardContent className="p-0">
                <p className="mb-4 text-white/90">
                  We understand the unique needs of our users and have designed our chatbot to cater specifically to those needs. 
                  Our service is reliable, efficient, and easy to use.
                </p>
                <p className="text-white/90">
                  Join us today and experience the difference. Our chatbot is like having a personal assistant who never sleeps, 
                  never complains, and always gets the job done.
                </p>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;