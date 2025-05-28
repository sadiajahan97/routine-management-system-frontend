import { ClassTypeValue } from "@routine-management-system/constants";
import { useState } from "react";
import { ClassTypePicker, DatePicker, Time, TimePicker } from "./components";

export default function AdminPage() {
  const [classType, setClassType] = useState<ClassTypeValue>();
  const [date, setDate] = useState<Date>();
  const [endTime, setEndTime] = useState<Time>();
  const [startTime, setStartTime] = useState<Time>();
  return (
    <main>
      <form>
        <ClassTypePicker classType={classType} setClassType={setClassType} />
        <DatePicker date={date} setDate={setDate} />
        <TimePicker setTime={setStartTime} time={startTime} />
        <TimePicker setTime={setEndTime} time={endTime} />
      </form>
    </main>
  );
}
