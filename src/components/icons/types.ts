import { ComponentType } from "react";

export enum ResourceIconColor {
  GREEN_G300 = "#008643",
  NEUTRAL_B55 = "#9e9e9e",
  WHITE = "#ffffff",
}

export type ResourceIcon = ComponentType<{ color: ResourceIconColor }>;
