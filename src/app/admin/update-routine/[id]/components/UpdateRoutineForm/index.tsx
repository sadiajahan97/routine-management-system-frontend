"use client";

import { Button, Input, Label } from "@routine-management-system/components/ui";
import { ClassTypeValue } from "@routine-management-system/constants";
import { Routine, updateRoutine } from "@routine-management-system/lib";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ClassTypePicker, DatePicker, Time, TimePicker } from "./components";

interface UpdateRoutineFormProps {
  id: string;
  routine: Routine;
}

export function UpdateRoutineForm({ id, routine }: UpdateRoutineFormProps) {
  const router = useRouter();
  const [classType, setClassType] = useState<ClassTypeValue>(routine.type);
  const [chapter, setChapter] = useState<string>(routine.chapter);
  const [date, setDate] = useState<Date | undefined>(new Date(routine.date));
  const [endTime, setEndTime] = useState<Time>({
    hours: routine.endTime.split(":")[0],
    minutes: routine.endTime.split(":")[1],
  });
  const [startTime, setStartTime] = useState<Time>({
    hours: routine.startTime.split(":")[0],
    minutes: routine.startTime.split(":")[1],
  });
  const [subject, setSubject] = useState<string>(routine.subject);
  useEffect(() => {
    setClassType(routine.type);
    setChapter(routine.chapter);
    setDate(new Date(routine.date));
    setEndTime({
      hours: routine.endTime.split(":")[0],
      minutes: routine.endTime.split(":")[1],
    });
    setStartTime({
      hours: routine.startTime.split(":")[0],
      minutes: routine.startTime.split(":")[1],
    });
    setSubject(routine.subject);
  }, [routine]);
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={async (event) => {
        event.preventDefault();
        const routine = {
          chapter,
          date: `${date?.getFullYear()}-${
            (date?.getMonth() || 0) + 1
          }-${date?.getDate()}`,
          endTime: `${endTime?.hours}:${endTime?.minutes}`,
          startTime: `${startTime?.hours}:${startTime?.minutes}`,
          subject,
          type: classType!,
        };
        await updateRoutine(id, routine);
        router.push("/admin");
      }}
    >
      <div className="flex gap-4">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          onChange={(event) => setSubject(event.target.value)}
          value={subject}
        />
      </div>
      <div className="flex gap-4">
        <Label htmlFor="chapter">Chapter</Label>
        <Input
          id="chapter"
          onChange={(event) => setChapter(event.target.value)}
          value={chapter}
        />
      </div>
      <div className="flex gap-4">
        <Label>Class Type</Label>
        <ClassTypePicker classType={classType} setClassType={setClassType} />
      </div>
      <div className="flex gap-4">
        <Label>Date</Label>
        <DatePicker date={date} setDate={setDate} />
      </div>
      <div className="flex gap-4">
        <Label>Start Time</Label>
        <TimePicker setTime={setStartTime} time={startTime} />
      </div>
      <div className="flex gap-4">
        <Label>End Time</Label>
        <TimePicker setTime={setEndTime} time={endTime} />
      </div>
      <Button type="submit">Update</Button>
    </form>
  );
}
