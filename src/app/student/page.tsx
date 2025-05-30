import { getAllRoutines, Routine } from "@routine-management-system/lib";
import { ChangeView } from "./components";

export default async function StudentPage() {
  const {
    data: {
      data: { routines },
    },
  } = (await getAllRoutines()) as {
    data: { data: { routines: (Routine & { id: string })[] } };
  };
  return (
    <main className="bg-white w-fit">
      <ChangeView routines={routines} />
    </main>
  );
}
