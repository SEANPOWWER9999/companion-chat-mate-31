import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";

export const FeedbackForm = () => {
  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-hotbot-purple" />
        Feedback
      </h2>
      <Textarea
        placeholder="Provide feedback on the response..."
        className="min-h-[100px] mb-4"
      />
      <Button className="w-full bg-gradient-hotbot text-white">
        Submit Feedback
      </Button>
    </div>
  );
};