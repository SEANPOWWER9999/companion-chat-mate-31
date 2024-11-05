import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // First create the user
      const { data: authData, error: authError } = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          data: {
            full_name: name
          }
        }
      });

      if (authError) throw authError;

      if (authData.user) {
        // Create the profile
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            { 
              id: authData.user.id,
              full_name: name,
            }
          ]);

        if (profileError) throw profileError;

        toast({
          title: "Welcome aboard! 👑",
          description: "Check your email to confirm your account!",
        });
        
        // Redirect to login page after successful signup
        navigate('/login');
      }
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

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      handleSignup(e);
    }
  };

  return (
    <motion.form
      onSubmit={handleNext}
      className="space-y-4 bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-auto"
    >
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {currentQuestion.label}
        </h3>
        <Input
          type={currentQuestion.type}
          placeholder={currentQuestion.placeholder}
          value={currentQuestion.value}
          onChange={(e) => currentQuestion.onChange(e.target.value)}
          className="bg-pink-50 border-pink-200 focus:border-pink-400"
          required
        />
        <Button 
          type="submit"
          className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3"
        >
          {step === questions.length - 1 ? "Complete Signup! 🎉" : "Next ✨"}
        </Button>
      </motion.div>
    </motion.form>
  );
};
