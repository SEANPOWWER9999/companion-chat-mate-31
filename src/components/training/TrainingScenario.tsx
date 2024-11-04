import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const TrainingScenario = () => {
  const [scenario, setScenario] = useState("");

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4">Create Training Scenario</h2>
      <Textarea
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
        placeholder="Describe a conversation scenario..."
        className="min-h-[150px] mb-4"
      />
      <Button className="w-full bg-gradient-hotbot text-white">
        Add Scenario
      </Button>
    </div>
  );
};