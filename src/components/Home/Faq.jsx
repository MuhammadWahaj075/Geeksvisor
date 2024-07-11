"use client";

import { faqData } from "@/utils/mockData";
import React, { useState } from "react";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 mt-[200px] sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <h2 className="title_text">Frequently Asked Questions</h2>
          <p className="max-w-[474px] description_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>

        <div className="max-w-[846px] mx-auto mt-8 space-y-4 md:mt-16">
          {faqData?.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-[#0E0F13] rounded-[12px]"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleAccordion(index)}
              >
                <span className="flex text-lg font-inter font-semibold text-neutral">
                  {item.question}
                </span>

                <svg
                  className={`w-6 h-6 text-primary ${
                    openIndex === index ? "rotate-0" : "rotate-0"
                  } transition-transform`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      openIndex === index
                        ? "M6 18L18 6M6 6l12 12"
                        : "M12 4v16m8-8H4"
                    }
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="description_text">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
