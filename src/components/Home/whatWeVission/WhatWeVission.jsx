import { OptimizedImage } from "@/components/comman";
import { healthData, WhatVissionMockData } from "@/utils/mockData";
import { corporate } from "../../../../public/assets";

export const WhatWeVission = () => (
  <div className="!mt-16 md:!mt-10 lg:!mt-[160px]">
    <div className="flex flex-wrap mx-auto flex-col xl:flex-row items-center xl:max-w-screen-xl justify-center gap-10">
      <div className="border-2 w-[320px] sm:w-[480px] xl:w-0 xl:h-[562px] border-l border-primary" />
      <OptimizedImage
        src={corporate}
        className={
          "w-[320px] h-[320px] sm:h-[510px] sm:w-[480px] lg:w-[455px] lg:h-[455px] rounded-[8px]"
        }
      />
      <div className="flex flex-col mx-auto lg:w-[45%] xl:w-auto !justify-center !items-center lg:!items-start">
        <div className="flex flex-col gap-y-4 !items-center  lg:!items-start">
          <h1 className="title_text">{WhatVissionMockData.title}</h1>
          <p className="description_text !text-[12px] sm:!text-[14px] lg:text-[18px]
           !leading-[14.52px] sm:!leading-[22px] lg:leading-[26px] !text-center lg:!text-start w-[350px] lg:w-[585px]">
            {WhatVissionMockData.description}
          </p>
          <p className="description_text !text-center lg:!text-start w-[350px] lg:w-[585px]">
            {WhatVissionMockData.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-5 w-[216px] md:w-[40%] my-10">
          {healthData?.map((items, i) => (
            <div key={i} className="flex gap-3 items-center">
              <OptimizedImage src={items.icon} />
              <h2 className="description_text">{items.name}</h2>
            </div>
          ))}
        </div>
        <p className="description_text !text-center lg:!text-start w-[350px] lg:w-[585px]">
          {WhatVissionMockData.approachText}
        </p>
      </div>
    </div>
  </div>
);
