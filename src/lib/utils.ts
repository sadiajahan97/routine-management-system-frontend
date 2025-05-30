import { BANGLA_DIGITS } from "@routine-management-system/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Routine } from "./services";

export type Timeline = "past" | "present" | "future";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function determineLessonDateTimeColor(timeline: Timeline) {
  switch (timeline) {
    case "past":
      return "text-neutral-b100";
    case "present":
      return "text-green-g300";
    case "future":
      return "text-neutral-b700";
  }
}

export function determineResourceButtonColors(
  isGhost: boolean,
  timeline: Timeline
) {
  switch (timeline) {
    case "past":
      return isGhost
        ? "bg-white border border-b40 hover:bg-white text-b55"
        : "bg-neutral-b300 border-none hover:bg-neutral-b300 text-white";
    case "present":
      return "bg-green-g300 border-0 hover:bg-white hover:border hover:border-green-g300 hover:cursor-pointer hover:text-green-g300 text-white";
    case "future":
      return "bg-neutral-b700 border-none hover:bg-neutral-b700 text-white";
  }
}

export function sortRoutines(routines: (Routine & { id: string })[]) {
  return routines.sort(
    (a, b) =>
      new Date(`${a.date}T${a.startTime}`).getTime() -
      new Date(`${b.date}T${b.startTime}`).getTime()
  );
}

export function translateEnglishNumberToBangla(string: string) {
  return string
    .split("")
    .map((char) => {
      return /\d/.test(char) ? BANGLA_DIGITS[parseFloat(char)] : char;
    })
    .join("");
}
