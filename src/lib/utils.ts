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
        ? "bg-white border border-b40 text-b55"
        : "bg-neutral-b300 border-none text-white";
    case "present":
      return "bg-green-g300 border-none text-white";
    case "future":
      return "bg-neutral-b700 border-none text-white";
  }
}

export function sortRoutines(routines: (Routine & { id: string })[]) {
  return routines.sort(
    (a, b) =>
      new Date(`${a.date}T${a.startTime}`).getTime() -
      new Date(`${b.date}T${b.startTime}`).getTime()
  );
}

export function translateEnglishNumberToBangla(number: string) {
  return number
    .split("")
    .map((index) => {
      return BANGLA_DIGITS[parseFloat(index)];
    })
    .join("");
}
