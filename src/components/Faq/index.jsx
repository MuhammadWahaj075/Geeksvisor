"use client";

import { useState } from "react";
import { faqData } from "@/utils/mockData";
import { OptimizedImage } from "@/components/comman";
import { MinusIcon, PlusIcon } from "../../../public/assets";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="!mt-16 md:!mt-10 lg:!mt-[160px]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto flex !gap-4 flex-col items-center text-center">
          <h2 className="title_text">Frequently Asked Questions</h2>
          <p
            className="description_text !max-w-[328px] sm:!max-w-[300px] lg:!max-w-[474px] !text-[12px]
           md:!text-[14px] lg:!text-[18px] 
           !leading-[14.52px] md:!leading-[22px] lg:!leading-[26px]"
          >Find answers to the most common questions about our services and process</p>
        </div>
        <div className="max-w-[846px] mx-auto mt-8 space-y-4 md:mt-16">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-secondary-inputColor rounded-[12px] overflow-hidden"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleAccordion(index)}
              >
                <span className="flex text-start !text-[14px] !leading-[16.94px] md:!leading-[26px] lg:!text-[18px] font-inter font-semibold text-neutral">
                  {item.question}
                </span>
                <div
                  style={{
                    transform:
                      openIndex === index ? "scale(1.1)" : "scale(1.0)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <OptimizedImage
                    src={openIndex === index ? MinusIcon : PlusIcon}
                  />
                </div>
              </button>
              <div
                style={{
                  maxHeight: openIndex === index ? "500px" : "0px",
                  transition:
                    openIndex === index
                      ? "max-height 0.5s ease-in-out"
                      : "max-height 0.5s ease-in-out ",
                  overflow: "hidden",
                }}
              >
                <p className="px-4 pb-5 sm:px-6 sm:pb-6 text-[12px] md:!text-[14px] !leading-[14.52px] md:!leading-[26px] lg:!text-[18px] description_text">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
