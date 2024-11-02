import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";

const Profile = () => {
  const [name, setName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: persona } = await supabase
          .from("personas")
          .select("*")
          .eq("user_id", user.id)
          .single();
        
        if (persona) {
          setName(persona.name);
          setApiKey(persona.httpsms_api_key || '');
          setPhone(persona.httpsms_phone || '');
        }
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { error } = await supabase
        .from("personas")
        .upsert({
          user_id: user.id,
          name,
          httpsms_api_key: apiKey,
          httpsms_phone: phone,
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <AlertDescription>
              To use SMS features, you'll need a httpSMS account. Follow these steps:
              <ol className="list-decimal ml-4 mt-2 space-y-1">
                <li>
                  <a 
                    href="https://httpsms.com/signup" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 inline-flex items-center"
                  >
                    Sign up for httpSMS <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://httpsms.com/settings" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 inline-flex items-center"
                  >
                    Get your API key from settings <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </li>
                <li>Enter your API key and phone number below</li>
              </ol>
            </AlertDescription>
          </Alert>

          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div className="space-y-2">
              <label>Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label>httpSMS API Key</label>
              <Input
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Your httpSMS API Key"
                type="password"
                pattern="^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$"
                title="Please enter a valid API key"
              />
            </div>
            <div className="space-y-2">
              <label>Phone Number</label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1234567890"
                pattern="^\+[1-9]\d{1,14}$"
                title="Please enter a valid phone number in international format (e.g., +1234567890)"
              />
              <p className="text-sm text-gray-500">Enter the phone number associated with your httpSMS account</p>
            </div>
            <Button type="submit">Update Profile</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;