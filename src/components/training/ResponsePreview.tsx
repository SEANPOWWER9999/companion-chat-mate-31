import { motion } from "framer-motion";

interface ResponsePreviewProps {
  response: string;
}

export const ResponsePreview = ({ response }: ResponsePreviewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card"
    >
      <h2 className="text-xl font-bold mb-4">Response Preview</h2>
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="chat-bubble-bot">
          {response || "Preview will appear here..."}
        </div>
      </div>
    </motion.div>
  );
};