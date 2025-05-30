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

interface ChangeViewProps {
  routines: (Routine & { id: string })[];
}

export function ChangeView({ routines }: ChangeViewProps) {
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Date</TableHead>
          {timeSlots.map((timeSlot, index) => (
            <TableHead
              className="text-center"
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
        {dates.map((date, index) => {
          return (
            <TableRow key={index}>
              <TableCell className="text-center">
                <div>
                  {translateEnglishNumberToBangla(date.split("-")[2])}{" "}
                  {BANGLA_MONTHS[parseFloat(date.split("-")[1]) - 1]},{" "}
                  {translateEnglishNumberToBangla(date.split("-")[0])}
                </div>
                <div>{BANGLA_WEEKDAYS[new Date(date).getDay()]}</div>
              </TableCell>
              {sortedRoutines
                .filter((routine) => routine.date === date)
                .map((routine) =>
                  timeSlots.map((timeSlot, index) =>
                    timeSlot === `${routine.startTime}-${routine.endTime}` ? (
                      <TableCell className="text-center" key={index}>
                        <div>{routine.subject}</div>
                        <div>{routine.chapter}</div>
                      </TableCell>
                    ) : (
                      <TableCell key={index}></TableCell>
                    )
                  )
                )}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
