import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ChatbotConfigProps {
  character: string;
  knowledge: string;
  style: string;
  isLoading?: boolean;
  onConfigChange: (config: {
    character: string;
    knowledge: string;
    style: string;
  }) => void;
}

export const ChatbotConfig = ({
  character,
  knowledge,
  style,
  isLoading = false,
  onConfigChange,
}: ChatbotConfigProps) => {
  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <div className="space-y-2">
          <Label htmlFor="character">Chatbot Character</Label>
          <Input
            id="character"
            value={character}
            onChange={(e) => onConfigChange({ character: e.target.value, knowledge, style })}
            placeholder="Enter chatbot character..."
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="knowledge">Chatbot Knowledge</Label>
          <Input
            id="knowledge"
            value={knowledge}
            onChange={(e) => onConfigChange({ character, knowledge: e.target.value, style })}
            placeholder="Enter chatbot knowledge..."
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="style">Chatbot Style</Label>
          <Input
            id="style"
            value={style}
            onChange={(e) => onConfigChange({ character, knowledge, style: e.target.value })}
            placeholder="Enter chatbot style..."
            disabled={isLoading}
          />
        </div>
      </CardContent>
    </Card>
  );
};
