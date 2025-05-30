import { BANGLA_MONTHS } from "@routine-management-system/constants";
import {
  Routine,
  sortRoutines,
  translateEnglishNumberToBangla,
} from "@routine-management-system/lib";
import { Lesson } from "./components";

interface TimelineViewProps {
  routines: (Routine & { id: string })[];
}

export function TimelineView({ routines }: TimelineViewProps) {
  return (
    <div className="flex flex-col gap-3">
      {sortRoutines(routines).map((routine) => {
        const today = new Date().toISOString().split("T")[0];
        const timeline =
          routine.date === today
            ? "present"
            : new Date(routine.date) < new Date(today)
            ? "past"
            : "future";
        return (
          <Lesson
            chapter={routine.chapter}
            datetime={{
              day: translateEnglishNumberToBangla(routine.date.split("-")[2]),
              hours: translateEnglishNumberToBangla(
                routine.startTime.split(":")[0]
              ),
              minutes: translateEnglishNumberToBangla(
                routine.startTime.split(":")[1]
              ),
              month: BANGLA_MONTHS[parseFloat(routine.date.split("-")[1]) - 1],
              year: translateEnglishNumberToBangla(routine.date.split("-")[0]),
            }}
            key={routine.id}
            subject={routine.subject}
            timeline={timeline}
          />
        );
      })}
    </div>
  );
}
