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
  classType: ClassTypeValue | undefined;
  setClassType: Dispatch<SetStateAction<ClassTypeValue | undefined>>;
}

export function ClassTypePicker({
  classType,
  setClassType,
}: ClassTypePickerProps) {
  return (
    <Select
      onValueChange={(value) => setClassType(value as ClassTypeValue)}
      value={classType}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Hours" />
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
