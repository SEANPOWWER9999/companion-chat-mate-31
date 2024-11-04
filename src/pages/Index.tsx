import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Heart, Rocket, Gem } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-100 via-indigo-100 to-cyan-100">
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/10 shadow-lg transition-all duration-300">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300">
              User Private Chat
            </Link>
            <div className="flex flex-wrap items-center gap-6">
              <Link to="/" className="text-gray-800 hover:text-pink-600 transition-colors font-medium">Home</Link>
              <Link to="/login" className="text-gray-800 hover:text-pink-600 transition-colors font-medium">Login</Link>
              <Link to="/chat-signup" className="text-gray-800 hover:text-pink-600 transition-colors font-medium">Sign Up</Link>
              <Link to="/profile" className="text-gray-800 hover:text-pink-600 transition-colors font-medium">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with Improved Spacing */}
      <main className="container mx-auto px-4">
        <section className="py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="relative mb-12">
              <div className="absolute inset-0 blur-3xl bg-gradient-conic from-pink-500/40 via-purple-500/40 to-indigo-500/40 rounded-full transform -translate-y-1/2"></div>
              <h1 className="relative text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 leading-tight">
                Welcome to User Private Chat
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
              Experience secure and efficient communication with our advanced chatbot service. 
              Perfect for managing profiles, client communications, and streamlined bookings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-indigo-600 hover:to-pink-600 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 transform">
                <Link to="/chat-signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid with Improved Spacing */}
        <section className="py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group border-none bg-white/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Star className="w-12 h-12 text-pink-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-gray-800">Profile Management</CardTitle>
                <CardDescription className="text-gray-600">Easily manage your services, rates, and availability in one place.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-none bg-white/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Heart className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-gray-800">Client Communication</CardTitle>
                <CardDescription className="text-gray-600">Seamless chat interface for efficient client interactions.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-none bg-white/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Rocket className="w-12 h-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-gray-800">Booking System</CardTitle>
                <CardDescription className="text-gray-600">Streamlined booking management and scheduling tools.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-none bg-white/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Gem className="w-12 h-12 text-pink-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-gray-800">Premium Security</CardTitle>
                <CardDescription className="text-gray-600">Advanced encryption and privacy protection for your data.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Why Choose Us Section with Improved Design */}
        <section className="py-20">
          <Card className="border-none shadow-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="p-12">
              <CardTitle className="text-3xl mb-6">Why Choose Us?</CardTitle>
              <CardContent className="p-0 space-y-4">
                <p className="text-white/90">
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
        </section>
      </main>
    </div>
  );
};

export default Index;
