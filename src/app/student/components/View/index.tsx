"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Button } from "@routine-management-system/components/ui";
import { Routine } from "@routine-management-system/lib";
import { useState } from "react";
import { FocusView, GridView, TimelineView } from "./components";

interface ViewProps {
  routines: (Routine & { id: string })[];
}

export function View({ routines }: ViewProps) {
  const [routine, setRoutine] = useState<Routine & { id: string }>(routines[0]);
  const [view, setView] = useState<"grid" | "timeline">("grid");
  return (
    <div className="border border-neutral-b40 bg-white flex flex-col gap-8 p-4 rounded-[12px]">
      <div className="font-semibold text-base text-neutral-b700">
        এসিএস ফিউচার স্কুল স্টাডি প্ল্যানার ২০২৫
      </div>
      <FocusView routine={routine} />
      <div className="flex flex-col items-start gap-3 pt-3">
        <Button
          className="bg-white border-none flex gap-1 hover:bg-neutral-b40 hover:cursor-pointer"
          onClick={() => setView(view === "grid" ? "timeline" : "grid")}
        >
          <FontAwesomeIcon
            className="h-auto text-neutral-b700 w-3.25"
            icon={faEye}
          />
          <div className="font-medium text-base text-neutral-b700">
            Change View
          </div>
        </Button>
        {view === "grid" ? (
          <GridView
            routines={routines}
            selectedId={routine.id}
            setRoutine={setRoutine}
          />
        ) : (
          <TimelineView routines={routines} setRoutine={setRoutine} />
        )}
      </div>
    </div>
  );
}
