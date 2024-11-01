import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Preferences = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(true);
  const { toast } = useToast();

  const handleSavePreferences = () => {
    // In a real app, this would save to the database
    toast({
      title: "Success",
      description: "Preferences saved successfully",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="font-medium">Email Notifications</h3>
              <p className="text-sm text-muted-foreground">
                Receive email notifications about new messages
              </p>
            </div>
            <Switch
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="font-medium">SMS Notifications</h3>
              <p className="text-sm text-muted-foreground">
                Receive SMS notifications about new messages
              </p>
            </div>
            <Switch
              checked={smsNotifications}
              onCheckedChange={setSmsNotifications}
            />
          </div>
          <Button onClick={handleSavePreferences} className="w-full">
            Save Preferences
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Preferences;