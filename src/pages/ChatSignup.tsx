import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  content: string;
  isBot: boolean;
}

const ChatSignup = () => {
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hi there! 👋 Let's get you set up with an account. First, what's your email?", isBot: true }
  ]);
  const [currentStep, setCurrentStep] = useState<'email' | 'password' | 'complete'>('email');
  const [userInput, setUserInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleUserInput = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message to chat
    setMessages(prev => [...prev, { content: userInput, isBot: false }]);

    if (currentStep === 'email') {
      if (!userInput.includes('@')) {
        setMessages(prev => [...prev, { 
          content: "That doesn't look like a valid email. Could you please try again?", 
          isBot: true 
        }]);
        setUserInput("");
        return;
      }
      setEmail(userInput);
      setMessages(prev => [...prev, { 
        content: "Great! Now, please create a password (at least 6 characters):", 
        isBot: true 
      }]);
      setCurrentStep('password');
    } else if (currentStep === 'password') {
      if (userInput.length < 6) {
        setMessages(prev => [...prev, { 
          content: "Your password needs to be at least 6 characters long. Please try again:", 
          isBot: true 
        }]);
        setUserInput("");
        return;
      }
      setPassword(userInput);
      setCurrentStep('complete');
      
      try {
        const { error } = await supabase.auth.signUp({
          email,
          password: userInput,
        });

        if (error) throw error;

        setMessages(prev => [...prev, { 
          content: "Perfect! I've created your account. Check your email to verify your address, then you can log in!", 
          isBot: true 
        }]);

        toast({
          title: "Success!",
          description: "Please check your email to verify your account.",
        });

        setTimeout(() => {
          navigate('/login');
        }, 5000);

      } catch (error: any) {
        setMessages(prev => [...prev, { 
          content: `Oops! Something went wrong: ${error.message}. Let's start over.`, 
          isBot: true 
        }]);
        setCurrentStep('email');
      }
    }
    setUserInput("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 p-4">
      <Card className="w-full max-w-md h-[600px] flex flex-col bg-white/80 backdrop-blur-lg">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-gray-200 text-gray-800 rounded-tl-none'
                    : 'bg-blue-500 text-white rounded-tr-none'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleUserInput} className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              type={currentStep === 'password' ? 'password' : 'text'}
              placeholder={currentStep === 'email' ? "Enter your email..." : "Enter your password..."}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">Send</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ChatSignup;