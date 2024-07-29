import { OptimizedImage } from "@/components/comman";
import { healthData } from "@/utils/mockData";

export const WhatWeVission = () => {
  return (
    <div className=" mt-[60px]">
      <div className="flex  flex-wrap mx-auto flex-col xl:flex-row items-center xl:max-w-screen-xl justify-center gap-10">
        <div className="border-2 w-[320px] sm:w-[480px] xl:w-0 xl:h-[562px] border-l border-primary" />
        <div
          className="w-[320px] h-[320px] sm:h-[510px] sm:w-[480px]
         lg:w-[455px] lg:h-[455px] rounded-[8px] bg-[#2F2B43]"
        >
          {/* Image here */}
        </div>
        <div className="flex flex-col mx-auto lg:w-[45%] xl:w-auto !justify-center  items-center lg:items-start">
          <div className="flex flex-col gap-y-4 items-start">
          <h1 className="title_text">What we vission</h1>
          <p className="description_text items-start w-[350px] lg:w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="description_text w-[350px] lg:w-[500px]">
            We develop custom software solutions to meet the unique needs of
            various industries.
          </p>
          </div>
          <div className="flex flex-wrap gap-5 w-[260px] md:w-[40%] my-10">
            {healthData?.map((items, i) => (
              <div key={i} className="flex gap-3 items-center">
                <OptimizedImage src={items.icon} alt="icon" />
                <h2 className="description_text">{items.name}</h2>
              </div>
            ))}
          </div>
          <p className="description_text items-start w-[350px] lg:w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};
