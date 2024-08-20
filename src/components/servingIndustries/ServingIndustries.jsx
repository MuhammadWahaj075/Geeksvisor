"use client";

import { servingIndustries, ServingMockData } from "@/utils/mockData";
import { motion } from "framer-motion";
import "./style.css";
import { OptimizedImage } from "../comman";

export const ServingIndustries = () => {
  const itemWidth = 200;
  const itemCount = servingIndustries.length;
  const totalWidth = itemWidth * itemCount;

  const animationSettings = {
    repeat: Infinity,
    ease: "linear",
    duration: totalWidth / 30,
    repeatType: "loop",
  };

  return (
    <div className="relative z-20 !mt-16 md:!mt-10 lg:!mt-[160px] px-5 mx-auto lg:max-w-[1164px] center-div">
      <div className="flex-center-column text-center">
        <div className="flex justify-center items-center flex-col">
          <h2 className="title_text font-bold text-center text">
            {ServingMockData?.title}
          </h2>
          <p className="description_text max-w-[653px] mt-[16px] text-center">
            {ServingMockData?.description}
          </p>
        </div>
      </div>

      <div className="main mt-[72px]">
        <div className="inner-div">
          <div className="overflow-hidden mx-auto lg:w-full !h-[204px] md:!h-[304px] flex items-center">
            <motion.div
              className="flex"
              animate={{ x: [`0%`, `-${totalWidth}px`] }}
              transition={animationSettings}
              style={{
                display: "flex",
                width: `${totalWidth * 2}px`,
                position: "relative",
              }}
            >
              {[...servingIndustries, ...servingIndustries].map(
                (item, index) => (
                  <div
                    key={index}
                    className="serving_card flex flex-row items-center"
                    style={{ width: `${itemWidth}px` }}
                  >
                    <div className="w-[70px] lg:!w-[60px] border-[0.5px] border-primary-borderColor" />
                    <div className="flex gap-2 !justify-center flex-col !items-center !w-[56px] !h-[56px] lg:!w-[102px] lg:!h-[88px] border border-primary-borderColor rounded-[12px]">
                      <OptimizedImage
                        src={item?.icon}
                        className="rounded-[8px] w-[21.96px] h-[21.96px] lg:!h-[31.85px] lg:!w-[35.81px]"
                      />
                      <p className="description_text !leading-[9.68px] lg:!leading-[12px] !text-[8px] lg:!text-[12px] ">
                        {item?.name}
                      </p>
                    </div>
                    <div className="!w-[70px] lg:!w-[60px] border-[0.5px] border-primary-borderColor" />
                    {index < itemCount * 2 - 1 && (
                      <div className="dot w-2 h-2 bg-primary rounded-full" />
                    )}
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
