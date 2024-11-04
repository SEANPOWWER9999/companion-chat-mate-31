import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users } from "lucide-react";

export const TrainersList = () => {
  const trainers = [
    { id: 1, name: "Emma Wilson", specialization: "Conversation Flow", activeScenarios: 15 },
    { id: 2, name: "Michael Chen", specialization: "Response Patterns", activeScenarios: 12 },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Users className="w-6 h-6 text-hotbot-purple" />
        Active Trainers
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Specialization</TableHead>
            <TableHead>Active Scenarios</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trainers.map((trainer) => (
            <TableRow key={trainer.id}>
              <TableCell>{trainer.name}</TableCell>
              <TableCell>{trainer.specialization}</TableCell>
              <TableCell>{trainer.activeScenarios}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};