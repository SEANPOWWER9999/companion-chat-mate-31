import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(0);
  const { toast } = useToast();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          data: {
            name: name
          }
        }
      });
      if (error) throw error;
      toast({
        title: "Yasss Queen! 👑",
        description: "Check your email to confirm your account!",
      });
    } catch (error: any) {
      toast({
        title: "Oops! 😅",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const questions = [
    {
      label: "What's your name? ✨",
      value: name,
      onChange: setName,
      type: "text",
      placeholder: "Your fabulous name"
    },
    {
      label: "Great! And your email? 📧",
      value: email,
      onChange: setEmail,
      type: "email",
      placeholder: "your.email@example.com"
    },
    {
      label: "Perfect! Now set a password 🔒",
      value: password,
      onChange: setPassword,
      type: "password",
      placeholder: "Make it strong!"
    }
  ];

  const currentQuestion = questions[step];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="chat-bubble-bot mb-4"
      >
        {currentQuestion.label}
      </motion.div>

      <form onSubmit={handleSignup} className="space-y-4">
        <Input
          type={currentQuestion.type}
          placeholder={currentQuestion.placeholder}
          value={currentQuestion.value}
          onChange={(e) => currentQuestion.onChange(e.target.value)}
          className="android-input"
        />

        <div className="flex gap-2 justify-end">
          {step > 0 && (
            <Button
              type="button"
              onClick={() => setStep(s => s - 1)}
              variant="outline"
              className="android-button"
            >
              Back
            </Button>
          )}
          
          {step < questions.length - 1 ? (
            <Button
              type="button"
              onClick={() => setStep(s => s + 1)}
              className="android-button"
              disabled={!currentQuestion.value}
            >
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              className="android-button"
              disabled={!name || !email || !password}
            >
              Create Account ✨
            </Button>
          )}
        </div>
      </form>
    </motion.div>
  );
};