import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Heart, Rocket, Gem, MessageSquare, Code, Terminal } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-lg transition-all duration-300">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link to="/" className="text-2xl font-bold text-white hover:text-pink-500 transition-colors">
              GPT Engineer Interface
            </Link>
            <div className="flex flex-wrap items-center gap-6">
              <Link to="/" className="text-gray-300 hover:text-pink-500 transition-colors font-medium">Home</Link>
              <Link to="/login" className="text-gray-300 hover:text-pink-500 transition-colors font-medium">Login</Link>
              <Link to="/chat-signup" className="text-gray-300 hover:text-pink-500 transition-colors font-medium">Sign Up</Link>
              <Link to="/profile" className="text-gray-300 hover:text-pink-500 transition-colors font-medium">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        <section className="py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="relative mb-12">
              <div className="absolute inset-0 blur-3xl bg-gradient-conic from-pink-500/40 via-purple-500/40 to-indigo-500/40 rounded-full transform -translate-y-1/2"></div>
              <h1 className="relative text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Your AI Engineering Assistant
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
              Experience the power of AI-assisted development. Build, test, and deploy with confidence using our advanced GPT interface.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-indigo-600 hover:to-pink-600 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 transform">
                <Link to="/chat-signup">Start Building</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-pink-600 text-pink-600 hover:bg-pink-950/20 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group border-none bg-black/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Terminal className="w-12 h-12 text-pink-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white">AI Code Generation</CardTitle>
                <CardContent className="text-gray-300 pt-2">
                  Generate code snippets and entire components with natural language instructions.
                </CardContent>
              </CardHeader>
            </Card>

            <Card className="group border-none bg-black/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <MessageSquare className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white">Interactive Chat</CardTitle>
                <CardContent className="text-gray-300 pt-2">
                  Collaborate with AI through natural conversations to solve complex problems.
                </CardContent>
              </CardHeader>
            </Card>

            <Card className="group border-none bg-black/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Code className="w-12 h-12 text-indigo-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white">Real-time Preview</CardTitle>
                <CardContent className="text-gray-300 pt-2">
                  See your changes instantly with our integrated preview window.
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <Card className="border-none shadow-xl bg-gradient-to-r from-pink-900/50 via-purple-900/50 to-indigo-900/50 text-white hover:shadow-2xl transition-all duration-300">
            <CardHeader className="p-12">
              <CardTitle className="text-3xl mb-6">Ready to Start Building?</CardTitle>
              <CardContent className="p-0 space-y-4">
                <p className="text-white/90">
                  Join our community of developers and start building amazing applications with AI assistance.
                </p>
                <Button asChild size="lg" className="mt-6 bg-white text-gray-900 hover:bg-gray-100">
                  <Link to="/chat-signup">Get Started Now</Link>
                </Button>
              </CardContent>
            </CardHeader>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;