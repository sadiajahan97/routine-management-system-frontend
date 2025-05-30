import { getAllRoutines, Routine } from "@routine-management-system/lib";
import { View } from "./components";

export default async function StudentPage() {
  const {
    data: {
      data: { routines },
    },
  } = (await getAllRoutines()) as {
    data: { data: { routines: (Routine & { id: string })[] } };
  };
  return (
    <main className="w-[1170px]">
      <View routines={routines} />
    </main>
  );
}
