import { BANGLA_MONTHS } from "@routine-management-system/constants";
import {
  Routine,
  translateEnglishNumberToBangla,
} from "@routine-management-system/lib";
import { Lesson } from "./components";

interface TimelineViewProps {
  routines: Routine[];
}

export function TimelineView({ routines }: TimelineViewProps) {
  return (
    <div className="flex flex-col gap-3">
      {routines.map((routine, index) => {
        const date = new Date(
          parseFloat(routine.date.split("-")[0]),
          parseFloat(routine.date.split("-")[1]) - 1,
          parseFloat(routine.date.split("-")[2])
        );
        const now = new Date();
        const today = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate()
        );
        const timeline =
          date < today ? "past" : date > today ? "future" : "present";
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
            key={index}
            subject={routine.subject}
            timeline={timeline}
          />
        );
      })}
    </div>
  );
}
