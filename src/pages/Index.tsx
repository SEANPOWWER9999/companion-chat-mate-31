import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Heart, Rocket, Gem } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-indigo-100 p-4 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            User Private Chat
          </Link>
          <div className="space-x-6">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</Link>
            <Link to="/login" className="text-gray-600 hover:text-indigo-600 transition-colors">Login</Link>
            <Link to="/signup" className="text-gray-600 hover:text-indigo-600 transition-colors">Sign Up</Link>
            <Link to="/subscription" className="text-gray-600 hover:text-indigo-600 transition-colors">Subscription</Link>
            <Link to="/profile" className="text-gray-600 hover:text-indigo-600 transition-colors">Profile</Link>
            <Link to="/analytics" className="text-gray-600 hover:text-indigo-600 transition-colors">Analytics</Link>
            <Link to="/preferences" className="text-gray-600 hover:text-indigo-600 transition-colors">Preferences</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Welcome to User Private Chat
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience secure and efficient communication with our advanced chatbot service. 
              Perfect for managing profiles, client communications, and streamlined bookings.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Star className="w-12 h-12 text-indigo-600 mb-4" />
                <CardTitle>Profile Management</CardTitle>
                <CardDescription>Easily manage your services, rates, and availability in one place.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-indigo-600 mb-4" />
                <CardTitle>Client Communication</CardTitle>
                <CardDescription>Seamless chat interface for efficient client interactions.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Rocket className="w-12 h-12 text-indigo-600 mb-4" />
                <CardTitle>Booking System</CardTitle>
                <CardDescription>Streamlined booking management and scheduling tools.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Gem className="w-12 h-12 text-indigo-600 mb-4" />
                <CardTitle>Premium Security</CardTitle>
                <CardDescription>Advanced encryption and privacy protection for your data.</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Why Choose Us Section */}
          <Card className="border-none shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">Why Choose Us?</CardTitle>
              <CardContent className="p-0">
                <p className="mb-4">
                  We understand the unique needs of our users and have designed our chatbot to cater specifically to those needs. 
                  Our service is reliable, efficient, and easy to use.
                </p>
                <p>
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