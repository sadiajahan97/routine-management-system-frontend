import { Lesson } from "./components";

export function TimelineView() {
  return (
    <div className="flex flex-col gap-3">
      <Lesson timeline="past" />
      <Lesson timeline="present" />
      <Lesson timeline="future" />
    </div>
  );
}
