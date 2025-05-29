"use client";

import { Button, Input, Label } from "@routine-management-system/components/ui";
import { ClassTypeValue } from "@routine-management-system/constants";
import { createRoutine } from "@routine-management-system/lib";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ClassTypePicker, DatePicker, Time, TimePicker } from "./components";

export default function CreateRoutinePage() {
  const router = useRouter();
  const [classType, setClassType] = useState<ClassTypeValue>("REGULAR");
  const [chapter, setChapter] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [endTime, setEndTime] = useState<Time>({
    hours: "00",
    minutes: "00",
  });
  const [startTime, setStartTime] = useState<Time>({
    hours: "00",
    minutes: "00",
  });
  const [subject, setSubject] = useState<string>("");
  return (
    <main>
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
          await createRoutine(routine);
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
        <Button type="submit">Create</Button>
      </form>
    </main>
  );
}
