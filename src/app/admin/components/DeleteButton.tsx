"use client";

import { Button } from "@routine-management-system/components/ui";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  deleteRoutine: (id: string) => Promise<void>;
  id: string;
}

export function DeleteButton({ deleteRoutine, id }: DeleteButtonProps) {
  const router = useRouter();
  return (
    <Button
      onClick={async () => {
        await deleteRoutine(id);
        router.refresh();
      }}
    >
      Delete
    </Button>
  );
}
