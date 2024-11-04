import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Brain, Save, Play, ChartLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TrainingScenario } from "@/components/training/TrainingScenario";
import { ResponsePreview } from "@/components/training/ResponsePreview";
import { FeedbackForm } from "@/components/training/FeedbackForm";
import { PerformanceMetrics } from "@/components/training/PerformanceMetrics";

const Training = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [customResponse, setCustomResponse] = useState("");
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    const checkTrainerAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login");
        return;
      }
      // Check if user has trainer role
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();
      
      if (!["admin", "trainer"].includes(profile?.role || "")) {
        navigate("/");
      }
      setIsLoading(false);
    };

    checkTrainerAuth();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gradient">Training Interface</h1>
            <Button
              onClick={() => navigate("/admin")}
              className="bg-gradient-hotbot text-white"
            >
              Back to Admin
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="card">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-hotbot-purple" />
                  Custom Response Training
                </h2>
                <Textarea
                  value={customResponse}
                  onChange={(e) => setCustomResponse(e.target.value)}
                  placeholder="Enter your custom response pattern here..."
                  className="min-h-[200px]"
                />
                <div className="flex gap-4 mt-4">
                  <Button
                    onClick={() => setPreviewMode(true)}
                    className="bg-hotbot-coral text-white"
                  >
                    <Play className="w-4 h-4 mr-2" /> Preview
                  </Button>
                  <Button
                    onClick={() => {/* Save logic */}}
                    className="bg-hotbot-purple text-white"
                  >
                    <Save className="w-4 h-4 mr-2" /> Save
                  </Button>
                </div>
              </div>

              <TrainingScenario />
            </div>

            <div className="space-y-6">
              {previewMode && (
                <ResponsePreview response={customResponse} />
              )}
              <FeedbackForm />
              <PerformanceMetrics />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Training;