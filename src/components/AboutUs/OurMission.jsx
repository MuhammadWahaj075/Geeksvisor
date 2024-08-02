import { OurMissionMockData } from "@/utils/mockData";

export const OurMission = () => {
  return (
    <div className="mt-[70px] sm:!mt-[160px] xl:mt-[262px]">
      <div className="flex mx-auto px-5 items-center gap-4 flex-col-reverse lg:flex-row justify-center lg:gap-[118px]  lg:max-w-[1440px] flex-wrap">
        <div className="flex w-[320px] sm:w-[616px] xl:w-[474px] flex-col gap-4 items-start">
          <h1 className="title_text !text-neutral">
            {OurMissionMockData.title}
          </h1>
          <p className="text-start description_text">
            {OurMissionMockData.description}
          </p>

          <p className="text-start description_text">
            {OurMissionMockData.subtitle}
          </p>
        </div>
        <div
          className="w-[320px] sm:w-[616px] xl:w-[568px]
         h-[320px] sm:h-[616px] xl:h-[500px] flex bg-primary-imageTestColor  rounded-[8px]"
        />
      </div>
    </div>
  );
};
