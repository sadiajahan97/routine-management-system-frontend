import { useState } from "react";
import { DatePicker } from "./components";

export default function AdminPage() {
  const [date, setDate] = useState<Date>();
  return (
    <main>
      <form>
        <DatePicker date={date} setDate={setDate} />
      </form>
    </main>
  );
}
