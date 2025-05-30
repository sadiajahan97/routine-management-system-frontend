import { getRoutine, Routine } from "@routine-management-system/lib";
import { UpdateRoutineForm } from "./components";

interface UpdateRoutinePageParams {
  params: Promise<{ id: string }>;
}

export default async function UpdateRoutinePage({
  params,
}: UpdateRoutinePageParams) {
  const { id } = await params;
  const {
    data: {
      data: { routine },
    },
  } = (await getRoutine(id)) as {
    data: { data: { routine: Routine } };
  };
  return <UpdateRoutineForm id={id} routine={routine} />;
}
