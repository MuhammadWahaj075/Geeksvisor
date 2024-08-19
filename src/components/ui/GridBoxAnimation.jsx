"use client";

import { useEffect, useState } from "react";
import { useResponsiveBoxes } from "@/hooks/useResponsiveBoxes";

export default function GridBoxAnimation() {
  const totalBoxes = useResponsiveBoxes();
  const [highlightedIndices, setHighlightedIndices] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndices = [];
      const countToHighlight = 4 + Math.floor(Math.random() * 2);
      while (newIndices.length < countToHighlight) {
        const nextIndex = Math.floor(Math.random() * totalBoxes);
        if (!newIndices.includes(nextIndex)) {
          newIndices.push(nextIndex);
        }
      }
      setHighlightedIndices(newIndices);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalBoxes]);

  return (
    <div className="gridBoxes-container">
      {Array.from({ length: totalBoxes }, (_, index) => (
        <>
        
        <div className="left-shadow" />
        <div
          key={index}
          className={`gridBoxes ${highlightedIndices.includes(index) ? "highlighted" : ""}`}
        >
          <div className="right-shadow" />
        </div>
        </>
      ))}
    </div>
  );
}
