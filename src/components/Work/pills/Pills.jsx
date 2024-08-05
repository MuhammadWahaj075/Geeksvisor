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
    <div className="relative z-20 mt-[118px] px-5 mx-auto max-w-screen-xl">
      <div className="flex flex-wrap gap-4 justify-start">
        {pillData.map((pill, index) => (
          <Pill
            key={index}
            text={pill.text}
            className={`${selectedPill === pill.text ? "text-neutral" : ""} ${
              pill.className || ""
            }`}
            onClick={() => handlePillClick(pill.text)}
          />
        ))}
      </div>
    </div>
  );
};
