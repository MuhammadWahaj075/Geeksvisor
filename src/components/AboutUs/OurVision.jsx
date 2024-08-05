import { OurVisionMockData } from "@/utils/mockData";

export const OurVision = () => (
  <div className="mt-[70px] sm:mt-[160px] lg:mt-[262px]">
    <div className="flex mx-auto px-5 items-center gap-4 flex-col xl:flex-row justify-center lg:gap-[118px]  lg:max-w-[1440px] flex-wrap">
      <div
        className="w-[320px] sm:w-[616px] xl:w-[568px]
         h-[320px] sm:h-[616px] xl:h-[500px] flex bg-primary-imageTestColor rounded-[8px]"
      />
      <div
        className="flex w-[320px] sm:w-[616px] xl:w-[474px]
          flex-col gap-4 items-start"
      >
        <h1 className="title_text !text-neutral">{OurVisionMockData.title}</h1>
        <p className="text-start  description_text">
          {OurVisionMockData.subtitle}
        </p>

        <p className="text-start  description_text">
          {OurVisionMockData.description}
        </p>
      </div>
    </div>
  </div>
);
