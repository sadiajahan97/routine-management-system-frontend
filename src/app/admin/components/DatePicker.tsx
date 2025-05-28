"use client";

import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@routine-management-system/components/ui";
import { cn } from "@routine-management-system/lib";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface DatePickerProps {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
}

export function DatePicker({ date, setDate }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
