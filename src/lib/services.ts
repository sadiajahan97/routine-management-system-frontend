"use server";

import { ClassTypeValue } from "@routine-management-system/constants";
import axios from "axios";

export interface Routine {
  chapter: string;
  date: string;
  endTime: string;
  startTime: string;
  subject: string;
  type: ClassTypeValue;
}

const BACKEND_URL =
  "https://routine-management-system-backend-isvt.onrender.com";

export async function createRoutine(routine: Routine) {
  await axios.post(`${BACKEND_URL}/routines`, { routine });
}

export async function deleteRoutine(id: string) {
  await axios.delete(`${BACKEND_URL}/routines/${id}`);
}

export async function getAllRoutines() {
  return await axios.get(`${BACKEND_URL}/routines`);
}

export async function getRoutine(id: string) {
  return await axios.get(`${BACKEND_URL}/routines/${id}`);
}

export async function updateRoutine(id: string, routine: Routine) {
  await axios.put(`${BACKEND_URL}/routines/${id}`, { routine });
}
