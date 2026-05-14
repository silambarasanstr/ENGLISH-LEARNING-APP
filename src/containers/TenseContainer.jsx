// src/containers/TenseContainer.jsx
import { useState } from "react";
import TenseCard from "../components/TenseCard";
import tensesData from "../utils/tensesData";

const TenseContainer = () => {
  // CURRENT SELECTED DAY
  const [selectedDay, setSelectedDay] = useState("Day-1");

  // CURRENT DAY DATA
  const currentDay = tensesData[selectedDay];

  return (
    <div className="max-w-6xl mx-auto px-3 py-4">
      {/* DAY BUTTONS */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {Object.keys(tensesData).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 cursor-pointer
              
              ${
                selectedDay === day
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }
            `}
          >
            {day}
          </button>
        ))}
      </div>

      {/* HEADER */}
      <div className=" bg-indigo-600 text-white rounded px-4 py-3 shadow-sm mb-4">
        <h1 className="text-base md:text-xl font-semibold text-center leading-snug">
          {selectedDay} - Daily Tense Learning Practice
        </h1>
      </div>

      {/* DATE */}
      <div className="text-center text-xs text-gray-500 mb-4 space-y-0.5">
        <p>
          {currentDay.date.day}, {currentDay.date.month} {currentDay.date.year}
        </p>

        <p>{currentDay.date.fullDate}</p>
      </div>

      {/* TENSE CARDS */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3">
        {currentDay.tenses.length === 0 && (
          <div className="text-center text-sm text-gray-500">
            No tenses for this day.
          </div>
        )}

        {currentDay.tenses.map((tense) => (
          <TenseCard key={tense.id} tense={tense} />
        ))}
      </div>
    </div>
  );
};

export default TenseContainer;
