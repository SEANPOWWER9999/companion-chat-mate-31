import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { StatusToggle } from "@/components/profile/StatusToggle";
import { RatesSection } from "@/components/profile/RatesSection";
import { ServicesSection } from "@/components/profile/ServicesSection";
import { ChatbotConfig } from "@/components/profile/ChatbotConfig";
import { ProfileState, defaultRates } from "@/types/profile";

const Profile = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<ProfileState>({
    status: 'offline',
    description: '',
    rates: defaultRates,
    services: [],
    is_description_locked: false,
    is_rates_locked: false,
    is_services_locked: false,
    chatbot_character: '',
    chatbot_knowledge: '',
    chatbot_style: ''
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { data, error } = await supabase
        .from('profile_settings')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      if (data) {
        setProfile({
          status: data.status || 'offline',
          description: data.description || '',
          rates: data.rates ? JSON.parse(JSON.stringify(data.rates)) : defaultRates,
          services: data.services || [],
          is_description_locked: data.is_description_locked || false,
          is_rates_locked: data.is_rates_locked || false,
          is_services_locked: data.is_services_locked || false,
          chatbot_character: data.chatbot_character || '',
          chatbot_knowledge: data.chatbot_knowledge || '',
          chatbot_style: data.chatbot_style || ''
        });
      }
    } catch (error: any) {
      toast({
        title: "Error loading profile",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const saveProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { error } = await supabase
        .from('profile_settings')
        .upsert({
          id: user.id,
          status: profile.status,
          description: profile.description,
          rates: profile.rates,
          services: profile.services,
          is_description_locked: profile.is_description_locked,
          is_rates_locked: profile.is_rates_locked,
          is_services_locked: profile.is_services_locked,
          chatbot_character: profile.chatbot_character,
          chatbot_knowledge: profile.chatbot_knowledge,
          chatbot_style: profile.chatbot_style
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error saving profile",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Card className="bg-white/80 backdrop-blur-lg">
        <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-t-lg">
          <CardTitle className="text-center relative">
            <img
              alt="Hot Bot Logo"
              className="absolute left-2 top-2 w-8 h-8"
              src="/hotbot-logo.png"
            />
            The Hot Bot
            <p className="text-xs absolute bottom-1 right-2">Developed by K&P</p>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold bordered-title">Current Status</h2>
            <StatusToggle
              status={profile.status}
              onStatusChange={(status) => setProfile({ ...profile, status })}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold bordered-title">Description</h2>
            <Textarea
              value={profile.description}
              onChange={(e) => setProfile({ ...profile, description: e.target.value })}
              disabled={profile.is_description_locked}
              className="bg-pink-50"
              rows={4}
            />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="lock-description"
                checked={profile.is_description_locked}
                onCheckedChange={(checked) => 
                  setProfile({ ...profile, is_description_locked: checked as boolean })
                }
              />
              <Label htmlFor="lock-description">Lock Description</Label>
            </div>
          </div>

          <RatesSection
            rates={profile.rates}
            isLocked={profile.is_rates_locked}
            onRatesChange={(rates) => setProfile({ ...profile, rates })}
            onLockChange={(locked) => setProfile({ ...profile, is_rates_locked: locked })}
          />

          <ServicesSection
            selectedServices={profile.services}
            isLocked={profile.is_services_locked}
            onServicesChange={(services) => setProfile({ ...profile, services })}
            onLockChange={(locked) => setProfile({ ...profile, is_services_locked: locked })}
          />

          <ChatbotConfig
            character={profile.chatbot_character}
            knowledge={profile.chatbot_knowledge}
            style={profile.chatbot_style}
            onConfigChange={({ character, knowledge, style }) => 
              setProfile({ 
                ...profile, 
                chatbot_character: character,
                chatbot_knowledge: knowledge,
                chatbot_style: style
              })
            }
          />

          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="bg-pink-200 text-gray-900"
            >
              Back
            </Button>
            <Button
              onClick={saveProfile}
              className="bg-pink-500 text-white hover:bg-pink-600"
            >
              Save Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
