"use client";

import { useScroll } from "@/hooks/UseScroll";
import { faqData } from "@/utils/mockData";
import React, { useState } from "react";
import { OptimizedImage } from "../comman";
import { CrossIcon, PlusIcon } from "../../../public/assets";

export const Faq = () => {
  const { openIndex, setOpenIndex } = useScroll();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" mt-[100px] lg:mt-[200px] ">
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
                <span className="flex text-start text-lg font-inter font-semibold text-neutral">
                  {item.question}
                </span>

                <OptimizedImage
                  src={openIndex === index ? CrossIcon : PlusIcon}
                />
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
