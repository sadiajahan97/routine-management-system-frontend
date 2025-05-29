import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@routine-management-system/components/ui";
import {
  CLASS_TYPES,
  ClassTypeValue,
} from "@routine-management-system/constants";
import { Dispatch, SetStateAction } from "react";

interface ClassTypePickerProps {
  classType: ClassTypeValue;
  setClassType: Dispatch<SetStateAction<ClassTypeValue>>;
}

export function ClassTypePicker({
  classType,
  setClassType,
}: ClassTypePickerProps) {
  return (
    <Select
      defaultValue={classType}
      onValueChange={(value) => setClassType(value as ClassTypeValue)}
      value={classType}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Class Type" />
      </SelectTrigger>
      <SelectContent>
        {CLASS_TYPES.map((classType, index) => (
          <SelectItem key={index} value={classType.value}>
            {classType.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
