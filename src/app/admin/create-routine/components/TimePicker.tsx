import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@routine-management-system/components/ui";
import { HOURS, MINUTES } from "@routine-management-system/constants";
import { Dispatch, SetStateAction } from "react";

export interface Time {
  hours: string;
  minutes: string;
}

interface TimePickerProps {
  setTime: Dispatch<SetStateAction<Time>>;
  time: Time;
}

export function TimePicker({ setTime, time }: TimePickerProps) {
  return (
    <div className="flex gap-4">
      <Select
        defaultValue="00"
        onValueChange={(value) => setTime({ ...time, hours: value })}
        value={time.hours}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Hours" />
        </SelectTrigger>
        <SelectContent>
          {HOURS.map((hour, index) => (
            <SelectItem key={index} value={hour}>
              {hour}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        defaultValue="00"
        onValueChange={(value) => setTime({ ...time, minutes: value })}
        value={time.minutes}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Minutes" />
        </SelectTrigger>
        <SelectContent>
          {MINUTES.map((minute, index) => (
            <SelectItem key={index} value={minute}>
              {minute}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
