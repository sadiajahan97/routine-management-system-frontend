"use client";

import { Button } from "@routine-management-system/components/ui";
import { useRouter } from "next/navigation";

export function CreateButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push("/admin/create-routine");
      }}
    >
      Create
    </Button>
  );
}
