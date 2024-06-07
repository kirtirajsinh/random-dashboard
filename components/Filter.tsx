"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";

const Filter = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleSetActive = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-row items-center">
        <div className="flex flex-row space-x-4 items-center px-6 py-2 border rounded-lg">
          <div
            className={`text-lg font-semibold p-3 rounded-lg ${
              activeIndex === 0 ? "bg-orange-400" : ""
            }`}
            onClick={() => handleSetActive(0)}
          >
            Active
          </div>
          <div
            className={`text-lg font-semibold p-3 rounded-lg ${
              activeIndex === 1 ? "bg-orange-400" : ""
            }`}
            onClick={() => handleSetActive(1)}
          >
            Draft
          </div>
        </div>
        <div className="flex flex-row items-center px-4 space-x-3">
          <FaSearch />
          <input
            type="Search for job posting"
            placeholder="Search Jobs"
            className="border rounded-lg p-3 "
          />
        </div>
      </div>
      <div className="flex flex-row items-center px-4 space-x-4">
        <FaFilter />
        <FaArchive />
        <button className="bg-orange-400 rounded-lg p-3 text-lg font-semibold">
          + Create new job
        </button>
      </div>
    </div>
  );
};

export default Filter;
