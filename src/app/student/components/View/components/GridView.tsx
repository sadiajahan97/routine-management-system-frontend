import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@routine-management-system/components/ui";
import {
  BANGLA_MONTHS,
  BANGLA_WEEKDAYS,
} from "@routine-management-system/constants";
import {
  Routine,
  sortRoutines,
  translateEnglishNumberToBangla,
} from "@routine-management-system/lib";
import { Dispatch, SetStateAction } from "react";

interface GridViewProps {
  routines: (Routine & { id: string })[];
  selectedId: string;
  setRoutine: Dispatch<
    SetStateAction<
      Routine & {
        id: string;
      }
    >
  >;
}

export function GridView({ routines, selectedId, setRoutine }: GridViewProps) {
  const sortedRoutines = sortRoutines(routines);
  const dates = Array.from(
    new Set(sortedRoutines.map((routine) => routine.date))
  );
  const timeSlots = Array.from(
    new Set(
      sortedRoutines.map((routine) => `${routine.startTime}-${routine.endTime}`)
    )
  ).sort(
    (a, b) =>
      parseFloat(a.split("-")[0].split(":")[0]) * 60 +
      parseFloat(a.split("-")[0].split(":")[1]) -
      (parseFloat(b.split("-")[0].split(":")[0]) * 60 +
        parseFloat(b.split("-")[0].split(":")[1]))
  );
  return (
    <Table className="border border-neutral-b40">
      <TableHeader>
        <TableRow className="border-gray-g10 hover:bg-white">
          <TableHead className="border-gray-g10 border-r font-medium text-center text-gray-g60 text-sm">
            Date
          </TableHead>
          {timeSlots.map((timeSlot, index) => (
            <TableHead
              className="border-gray-g10 border-r font-medium last:border-r-0 text-base text-center text-neutral-b100"
              key={index}
            >{`${translateEnglishNumberToBangla(
              timeSlot.split("-")[0]
            )} টা থেকে ${translateEnglishNumberToBangla(
              timeSlot.split("-")[1]
            )} টা`}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {dates.map((date, dateIndex) => {
          return (
            <TableRow
              className="border-gray-g10 hover:bg-white"
              key={dateIndex}
            >
              <TableCell className="border-gray-g10 border-r font-medium text-base text-center text-neutral-b100">
                <div>
                  {translateEnglishNumberToBangla(date.split("-")[2])}{" "}
                  {BANGLA_MONTHS[parseFloat(date.split("-")[1]) - 1]},{" "}
                  {translateEnglishNumberToBangla(date.split("-")[0])}
                </div>
                <div>{BANGLA_WEEKDAYS[new Date(date).getDay()]}</div>
              </TableCell>
              {timeSlots.map((timeSlot, timeSlotIndex) => {
                const routine = sortedRoutines.find(
                  (routine) =>
                    routine.date === date &&
                    `${routine.startTime}-${routine.endTime}` === timeSlot
                );
                return routine ? (
                  <TableCell
                    onClick={() => setRoutine(routine)}
                    className={`${
                      routine.id === selectedId
                        ? "bg-green-g50 text-green-g300"
                        : "text-neutral-b100"
                    } border-gray-g10 border-r font-medium hover:bg-green-g50 hover:cursor-pointer hover:text-green-g300 last:border-r-0 text-base text-center`}
                    key={`${dateIndex}${timeSlotIndex}`}
                  >
                    <div>{routine.subject}</div>
                    <div>{routine.chapter}</div>
                  </TableCell>
                ) : (
                  <TableCell
                    className="border-gray-g10 border-r last:border-r-0"
                    key={`${dateIndex}${timeSlotIndex}`}
                  ></TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
