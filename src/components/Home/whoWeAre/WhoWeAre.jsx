import { OptimizedImage } from "@/components/comman";
import { whoWeAreMockData } from "@/utils/mockData";

export const WhoWeAre = () => (
  <div className="mt-[90px] lg:mt-[200px]">
    <div className="flex px-5 items-center gap-4 flex-col-reverse xl:flex-row justify-center lg:gap-16 mx-auto lg:max-w-screen-xl flex-wrap">
      <OptimizedImage
        src={whoWeAreMockData?.image}
        className="w-[316px] h-[298px] sm:w-[500px] sm:h-[500px] flex rounded-[8px]"
      />
      <div className="flex flex-col gap-4 items-center lg:items-start">
        <h1 className="title_text  !text-neutral">{whoWeAreMockData?.title}</h1>
        <p className="text-center lg:text-start max-w-[500px] description_text">
          {whoWeAreMockData?.description}
        </p>
      </div>
    </div>
  </div>
);
