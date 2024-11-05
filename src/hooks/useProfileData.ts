import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export const useProfileData = (id: string | undefined) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    city: "",
    area: "",
    bodyType: "",
    languages: [] as string[],
    bio: "",
    interests: [] as string[],
    restrictions: [] as string[],
    paymentMethod: "",
    cancellationPolicy: "",
    rates: {
      "30min": { incall: null as string | null, outcall: null as string | null },
      "1hour": { incall: null as string | null, outcall: null as string | null },
      "overnight": { incall: null as string | null, outcall: null as string | null }
    },
    botConfig: {
      character: "",
      knowledge: "",
      style: ""
    },
    botStats: {
      messageCount: 0,
      freeTierEndsAt: new Date().toISOString()
    }
  });

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) {
        setIsLoading(false);
        return;
      }
      
      try {
        const { data, error } = await supabase
          .from('profile_settings')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;

        if (data) {
          setProfile(data);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        toast({
          title: "Error",
          description: "Failed to load profile",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [id, toast]);

  return { profile, setProfile, isLoading };
};