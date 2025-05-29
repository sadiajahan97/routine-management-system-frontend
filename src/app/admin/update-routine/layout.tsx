import { ReactNode } from "react";

export default function UpdateRoutineLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <main>{children}</main>;
}
