"use client";

import { Button } from "@routine-management-system/components/ui";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col gap-4">
      <Button onClick={() => router.push("/admin")}>Admin</Button>
      <Button onClick={() => router.push("/student")}>Student</Button>
    </main>
  );
}
