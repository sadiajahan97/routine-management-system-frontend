"use client";

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
    <div>
      <FocusView routine={routine} />
      <Button onClick={() => setView(view === "grid" ? "timeline" : "grid")}>
        Change View
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
  );
}
