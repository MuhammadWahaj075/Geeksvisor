"use client";

import { mockQuotations } from "@/utils/mockData";
import "./style.css";

export const RollingWords = () => (
  <div className="box mb-20">
    <ul className="items flex justify-center flex-col items-center">
      {[...mockQuotations, ...mockQuotations].map((item, i) => (
        <li
          key={i}
          className="!text-[24px] sm:!text-[32px] lg:!text-[48px] !font-unbound !font-medium"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);
