import { WelcomeMessage } from "@/components/signup/WelcomeMessage";
import { SignupForm } from "@/components/signup/SignupForm";
import { Features } from "@/components/signup/Features";

const ChatSignup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <WelcomeMessage />
        <SignupForm />
        <Features />
      </div>
    </div>
  );
};

export default ChatSignup;