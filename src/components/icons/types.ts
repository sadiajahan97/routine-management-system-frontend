import { ComponentType } from "react";

export enum ResourceIconColor {
  NEUTRAL_B55 = "#9e9e9e",
  WHITE = "#ffffff",
}

export type ResourceIcon = ComponentType<{ color: ResourceIconColor }>;
