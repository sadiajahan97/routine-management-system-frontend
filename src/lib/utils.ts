import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

enum LessonDateTimeIconColor {
  GREEN_G300 = "#008643",
  NEUTRAL_B100 = "#757575",
  NEUTRAL_B700 = "#1c1c1c",
}

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

export function determineLessonDateTimeIconColor(timeline: Timeline) {
  switch (timeline) {
    case "past":
      return LessonDateTimeIconColor.NEUTRAL_B100;
    case "present":
      return LessonDateTimeIconColor.GREEN_G300;
    case "future":
      return LessonDateTimeIconColor.NEUTRAL_B700;
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
