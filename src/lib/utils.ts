import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type Timeline = "past" | "present" | "future";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
