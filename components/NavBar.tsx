"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBell } from "react-icons/fa";

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleSetActive = (index: number) => {
    setActiveIndex(index);
  };

  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-row  justify-between p-4 w-full">
      <Image
        src="/head.png"
        alt="Company Logo"
        width={64}
        height={64}
        className=""
      />
      <div
        className="flex flex-row space-x-4 items-center px-6 py-2 border rounded-full"
        ref={ref}
      >
        <div
          className={`text-lg font-semibold p-3 rounded-full ${
            activeIndex === 0 ? "bg-orange-400" : ""
          }`}
          onClick={() => handleSetActive(0)}
        >
          Jobs
        </div>
        <div
          className={`text-lg font-semibold p-3 rounded-full ${
            activeIndex === 1 ? "bg-orange-400" : ""
          }`}
          onClick={() => handleSetActive(1)}
        >
          Messages
        </div>
        <div
          className={`text-lg font-semibold p-3 rounded-full ${
            activeIndex === 2 ? "bg-orange-400" : ""
          }`}
          onClick={() => handleSetActive(2)}
        >
          Applicants
        </div>
        <div
          className={`text-lg font-semibold p-3 rounded-full ${
            activeIndex === 3 ? "bg-orange-400" : ""
          }`}
          onClick={() => handleSetActive(3)}
        >
          Matches
        </div>
      </div>
      <div className="flex flex-row items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4 mb-4 md:mb-0">
        <FaBell />
        <Image src={"/logo.png"} alt="Company Logo" width={32} height={32} />
      </div>
    </div>
  );
};

export default NavBar;
