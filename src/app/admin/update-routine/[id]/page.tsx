"use client";

import { ClassTypeValue } from "@routine-management-system/constants";
import { getRoutine, Routine } from "@routine-management-system/lib";
import { useParams } from "next/navigation";
import { use, useState } from "react";
import { ClassTypePicker, DatePicker, Time, TimePicker } from "./components";

export default function UpdateRoutinePage() {
  const { id } = useParams();
  const [classType, setClassType] = useState<ClassTypeValue>();
  const [chapter, setChapter] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [endTime, setEndTime] = useState<Time>();
  const [startTime, setStartTime] = useState<Time>();
  const [subject, setSubject] = useState<string>("");
  const {
    data: {
      data: { routine },
    },
  } = use(getRoutine(id as string)) as {
    data: { data: { routine: Routine } };
  };
  return <form></form>;
}
