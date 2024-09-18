import { OurVisionMockData } from "@/utils/mockData";

export const OurVision = () => (
  <div className=" mt-[70px] sm:mt-[160px] h-screen xl:h-auto  lg:mt-[162px]">
    <div className="relative flex mx-auto px-5 items-center gap-4 justify-center xl:justify-start lg:gap-[118px]  lg:max-w-screen-xl flex-wrap">
      <div
        className="w-auto lg:w-[926.66px]
         mb-4 sm:mb-12 lg:mb-0 flex flex-col gap-5 items-start px-8 pt-8 pb-12 bg-[#1b1b1d7a] shadow-xl rounded-[8px]"
      >
        <h1 className="title_text !text-neutral">{OurVisionMockData.missionTitle}</h1>
        <p className="text-start max-w-[600px] lg:max-w-full xl:max-w-[600px] description_text">
          {OurVisionMockData.missionDescription}
        </p>
        <h1 className="title_text !text-neutral">{OurVisionMockData.visionTitle}</h1>
        <p className="text-start max-w-[600px] lg:max-w-full xl:max-w-[600px] description_text">
          {OurVisionMockData.visionDescription}
        </p>
      </div>
      <div
        className="absolute -bottom-52 lg:-bottom-80 xl:bottom-auto xl:right-[30px] rounded-xl bg flex w-[333px] p-8 bg-[linear-gradient(90deg,#c9672f_0%,#FF2E00_100%)]  sm:w-[500px] xl:w-[533px]
          flex-col gap-4 items-start"
      >
        <h1 className="title_text !text-neutral">{OurVisionMockData.storyTitle}</h1>
        <p className="text-start !text-neutral description_text">
          {OurVisionMockData.storySubtitle}
        </p>

        {/* <p className="text-start  description_text">
          {OurVisionMockData.description}
        </p> */}
      </div>
    </div>
  </div>
);
