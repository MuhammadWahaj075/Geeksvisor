"use client";

import { useState } from "react";
import { Pill } from "@/components/comman";
import { pillData } from "@/utils/mockData";

export const Pills = () => {
  const [selectedPill, setSelectedPill] = useState(null);

  const handlePillClick = (text) => {
    setSelectedPill(text);
  };

  return (
    <div
      className="relative z-20 overflow-hidden w-[376px] md:mx-auto 
     md:w-[616px] xl:w-[1200px] mx-auto overflow-x-auto scroll_hidden"
    >
      <div className="mt-[118px] ">
        <div className="flex items-center  gap-4 justify-start">
          {pillData.map((pill, index) => (
            <Pill
              key={index}
              text={pill.text}
              className={`${
                selectedPill === pill.text
                  ? "text-neutral text-nowrap"
                  : "text-nowrap  text-primary-light"
              } ${pill.className || ""}`}
              onClick={() => handlePillClick(pill.text)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
