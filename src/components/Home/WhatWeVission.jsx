import { healthData } from "@/utils/mockData";
import Image from "next/image";

export const WhatWeVission = ()  => {
  return (
    <div className="mt-[100px]">
      <div className="flex flex-wrap  mx-5 lg:mx-auto items-center  justify-center gap-10">
        <div className="border-2 h-[562px] border-l border-primary"/>
        <div className="w-[320px] h-[320px] lg:h-[400px] lg:w-[400px] rounded-[8px] bg-[#2F2B43]">
          {/* <Image src={""} alt="img" /> */}
        </div>
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <h1 className="title_text">What we vission</h1>
          <p className="description_text items-start w-[350px] lg:w-[585px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="description_text w-[350px] lg:w-[585px]">
            We develop custom software solutions to meet the unique needs of
            various industries.
          </p>
          <div className="flex flex-wrap gap-5 mt-[40px]">
            {healthData?.map((items, i) => (
              <div className="flex gap-3 items-center">
                <Image src={items.icon} alt="icon" />
                <h2 className="description_text">{items.name}</h2>
              </div>
            ))}
          </div>
          <p className="description_text items-start w-[350px] lg:w-[585px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
