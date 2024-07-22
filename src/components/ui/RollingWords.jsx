"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mockQuotations } from "@/utils/mockData";

export function RollingWords() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const timeoutDuration = 2000; // Adjust as needed
    const totalQuotes = quotations.length;

    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % totalQuotes);
    }, timeoutDuration);

    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Adjust the stagger duration as needed
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      {mockQuotations?.map((quotation, index) => (
        <motion.div
          key={index}
          className={`text-[24px] lg:leading-[64px] lg:text-[48px] mb-10 text-primary font-jakarta font-bold  ${
            index === visibleIndex ? "fade-in-element" : "hidden"
          }`}
          variants={item}
        >
          {quotation}
        </motion.div>
      ))}
    </motion.div>
  );
}
