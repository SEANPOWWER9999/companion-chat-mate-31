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
    { content: "Hey there! 🔥 I'm HotBot, your friendly neighborhood chat assistant! I'll be helping you set up your amazing new account today. First things first - what's your name? 😊", isBot: true }
  ]);
  const [currentStep, setCurrentStep] = useState<'name' | 'email' | 'password' | 'complete'>('name');
  const [userInput, setUserInput] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleUserInput = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message to chat
    setMessages(prev => [...prev, { content: userInput, isBot: false }]);

    if (currentStep === 'name') {
      setName(userInput);
      setMessages(prev => [...prev, { 
        content: `Amazing to meet you, ${userInput}! 🌟 I can tell we're going to be great friends! Now, could you share your email address with me? I promise I won't spam you with hot takes! 😉`, 
        isBot: true 
      }]);
      setCurrentStep('email');
    } else if (currentStep === 'email') {
      if (!userInput.includes('@')) {
        setMessages(prev => [...prev, { 
          content: `Oops! ${name}, that doesn't quite look like an email address. Could you double-check that for me? 🤔`, 
          isBot: true 
        }]);
        setUserInput("");
        return;
      }
      setEmail(userInput);
      setMessages(prev => [...prev, { 
        content: `Perfect email, ${name}! 🎯 Last thing - let's set up a secure password (at least 6 characters). Make it hot, but not so hot that you'll forget it! 🔒`, 
        isBot: true 
      }]);
      setCurrentStep('password');
    } else if (currentStep === 'password') {
      if (userInput.length < 6) {
        setMessages(prev => [...prev, { 
          content: `${name}, that password is a bit too cool - we need at least 6 characters to keep things secure! Try again? 💪`, 
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
          content: `Woohoo! ${name}, we did it! 🎉 I've created your super-hot account! Check your email to verify your address, and then we can get this party started! 🚀`, 
          isBot: true 
        }]);

        toast({
          title: "Success! 🎯",
          description: "Please check your email to verify your account.",
        });

        setTimeout(() => {
          navigate('/login');
        }, 5000);

      } catch (error: any) {
        setMessages(prev => [...prev, { 
          content: `Oh snap! ${name}, we hit a snag: ${error.message}. Let's start fresh! 🔄`, 
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
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-tl-none'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-tr-none'
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
              placeholder={
                currentStep === 'name' ? "Enter your name..." :
                currentStep === 'email' ? "Enter your email..." :
                "Enter your password..."
              }
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
              Send
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ChatSignup;