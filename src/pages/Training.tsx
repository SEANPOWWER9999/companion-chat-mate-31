import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Training = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a placeholder for actual authentication logic
    toast({
      title: "Access Restricted",
      description: "Please contact your supervisor for access credentials.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 p-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <Card className="border-pink-100">
          <CardHeader>
            <CardTitle className="text-2xl text-gradient">HotBot Training Interface</CardTitle>
            <CardDescription className="text-lg">
              This is a restricted area for HotBot team members only. Here, authorized staff can
              customize our chatbot's knowledge base and fine-tune its responses.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-600">
              <p>🔒 <span className="font-semibold">Access Restricted:</span> This interface is exclusively for in-house staff responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Training HotBot's conversation patterns</li>
                <li>Updating response logic</li>
                <li>Managing API integrations</li>
                <li>Fine-tuning chatbot behavior</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4">
                <p className="text-yellow-800">
                  ⚠️ Note: This feature is not available for regular users. If you need access,
                  please contact your team supervisor.
                </p>
              </div>
            </div>

            <form onSubmit={handleLogin} className="mt-8 space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Staff Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-primary"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Staff Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-primary"
                />
              </div>
              <Button 
                type="submit"
                className="w-full btn-gradient"
              >
                Access Training Interface
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Training;