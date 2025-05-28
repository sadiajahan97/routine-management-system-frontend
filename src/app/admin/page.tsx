import { useState } from "react";
import { DatePicker, Time, TimePicker } from "./components";

export default function AdminPage() {
  const [date, setDate] = useState<Date>();
  const [endTime, setEndTime] = useState<Time>();
  const [startTime, setStartTime] = useState<Time>();
  return (
    <main>
      <form>
        <DatePicker date={date} setDate={setDate} />
        <TimePicker setTime={setStartTime} time={startTime} />
        <TimePicker setTime={setEndTime} time={endTime} />
      </form>
    </main>
  );
}
