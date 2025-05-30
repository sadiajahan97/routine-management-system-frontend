import { getAllRoutines, Routine } from "@routine-management-system/lib";
import { TimelineView } from "./components";

export default async function StudentPage() {
  const {
    data: {
      data: { routines },
    },
  } = (await getAllRoutines()) as {
    data: { data: { routines: Routine[] } };
  };
  return (
    <main className="bg-white w-fit">
      <TimelineView routines={routines} />
    </main>
  );
}
