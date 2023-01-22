import React from "react";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import { HabitDay } from "./HabitDay";
import { WeekDays } from "./WeekDays";

const summaryDates = generateDatesFromYearBeginning();
const minimumSummaryDatesSize = 18 * 7; //18 weeks
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

export const SummaryTable: React.FC = () => {
  return (
    <div className="w-full flex">
      <WeekDays />

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          return <HabitDay key={date.toString()} />;
        })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, index) => (
            <div
              key={index}
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          ))}
      </div>
    </div>
  );
};
