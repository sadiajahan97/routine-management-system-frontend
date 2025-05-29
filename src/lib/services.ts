import { ClassTypeValue } from "@routine-management-system/constants";
import "dotenv/config";

interface Routine {
  chapter: string;
  date: string;
  endTime: string;
  startTime: string;
  subject: string;
  type: ClassTypeValue;
}

const BACKEND_URL = process.env.BACKEND_URL || "";

export async function createRoutine(routine: Routine) {
  await axios.post(`${BACKEND_URL}/routines`, routine);
}
