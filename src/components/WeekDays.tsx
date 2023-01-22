import React from 'react'

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

export const WeekDays = () => {
  return (
    <div className="grid grid-rows-7 grid-flow-row gap-3">
    {weekDays.map((weekDay, index) => (
      <div
        key={`${weekDay}-${index}`}
        className="text-zinc-400 text-lg h-10 w-10 font-bold flex items-center justify-center"
      >
        {weekDay}
      </div>
    ))}
  </div>
  )
}
