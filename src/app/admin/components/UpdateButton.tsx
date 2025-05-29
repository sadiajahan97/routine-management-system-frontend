"use client";

import { Button } from "@routine-management-system/components/ui";
import { useRouter } from "next/navigation";

interface UpdateButtonProps {
  id: string;
}

export function UpdateButton({ id }: UpdateButtonProps) {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push(`/admin/update-routine/${id}`);
      }}
    >
      Update
    </Button>
  );
}
