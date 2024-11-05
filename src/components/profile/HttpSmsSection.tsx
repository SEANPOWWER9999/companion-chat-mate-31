import { Card } from "@/components/ui/card";
import { HttpSmsInstructions } from "./HttpSmsInstructions";
import { motion } from "framer-motion";

export const HttpSmsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Card className="p-6 bg-gradient-to-br from-white to-pink-50 border-pink-100">
        <HttpSmsInstructions />
      </Card>
    </motion.div>
  );
};