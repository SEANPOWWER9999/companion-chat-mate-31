import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export const useProfileData = (id: string | undefined) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState({
    name: "",
    city: "",
    area: "",
    bodyType: "",
    languages: [],
    bio: "",
    interests: [],
    restrictions: [],
    paymentMethod: "",
    cancellationPolicy: "",
    rates: {
      "30min": { incall: null, outcall: null },
      "1hour": { incall: null, outcall: null },
      "overnight": { incall: null, outcall: null }
    },
    botConfig: {
      character: "",
      knowledge: "",
      style: ""
    },
    botStats: {
      messageCount: 0,
      freeTierEndsAt: ""
    }
  });

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) return;
      
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