import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@routine-management-system/components/ui";
import {
  deleteRoutine,
  getAllRoutines,
  Routine,
} from "@routine-management-system/lib";
import { CreateButton, DeleteButton } from "./components";

export default async function AdminPage() {
  const {
    data: {
      data: { routines },
    },
  } = (await getAllRoutines()) as {
    data: { data: { routines: (Routine & { id: string })[] } };
  };
  return (
    <main>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Subject</TableHead>
            <TableHead className="text-center">Chapter</TableHead>
            <TableHead className="text-center">Class Type</TableHead>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Start Time</TableHead>
            <TableHead className="text-center">End Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {routines.map((routine) => (
            <TableRow key={routine.id}>
              <TableCell className="text-center">{routine.subject}</TableCell>
              <TableCell className="text-center">{routine.chapter}</TableCell>
              <TableCell className="text-center">{routine.type}</TableCell>
              <TableCell className="text-center">{routine.date}</TableCell>
              <TableCell className="text-center">{routine.startTime}</TableCell>
              <TableCell className="text-center">{routine.endTime}</TableCell>
              <TableCell>
                <DeleteButton deleteRoutine={deleteRoutine} id={routine.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CreateButton />
    </main>
  );
}
