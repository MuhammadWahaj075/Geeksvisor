import { OptimizedImage } from "@/components/comman";
import { Spline } from "../../../../public/assets";
import { developmentCardsData, developmentMockData } from "@/utils/mockData";
import { DevelopmentCard } from "./developmentCard/Card";

export const Development = () => {
  return (
    <div className="mt-10 relative z-10 md:mt-[132px] px-5 lg:mt-[200px]">
      <OptimizedImage
        src={Spline}
        height={"100%"}
        width={"100%"}
        className="absolute hidden sm:block top-[200px] lg:top-[-170px] right-0  lg:right-[-30px] bottom-0"
      />
      <div className="relative z-20 sm:max-w-[600px]  lg:!max-w-[1160px] mx-auto">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h1 className="title_text !text-[16px] md:!text-[24px] lg:!text-[32px]">
            {developmentMockData.title}
          </h1>
          <p className="description_text w-[328px] !leading-[14.52px] md:!leading-[22px] lg:!leading-[26px] md:w-auto !text-center md:!text-start">
            {developmentMockData.description}
          </p>
        </div>
      </div>
      <div className="relative z-20 mt-8">
        <div
          className={`flex mt-8 items-center gap-4 md:gap-6 flex-wrap justify-center`}
        >
          {developmentCardsData?.map((card) => (
            <DevelopmentCard
              className
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
