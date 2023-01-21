import React from "react";
import { HabitDay } from "../HabitDay";
import { WeekDays } from "../WeekDays";

export const SummaryTable: React.FC = () => {
  return (
    <div className="w-full flex">
      <WeekDays />

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
      </div>
    </div>
  );
};
