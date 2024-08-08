import { OptimizedImage } from "@/components/comman";
import { Spline } from "../../../../public/assets";
import { developmentCardsData } from "@/utils/mockData";
import { ServiceCards } from "../serviceCards";

export const Development = () => {
  return (
    <div className="mt-10 relative z-30 md:mt-[132px] px-5 lg:mt-[200px]">
      <OptimizedImage
        src={Spline}
        height={"100%"}
        width={"100%"}
        className="absolute hidden sm:block top-[200px] lg:top-[-170px] right-0  lg:right-[-90px] bottom-0"
      />
      <div className="relative z-20 sm:max-w-[600px]  lg:!max-w-[1160px] mx-auto">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h1 className="title_text !text-[16px] md:!text-[24px] lg:text-[32px]">
            Development
          </h1>
          <p className="description_text w-[328px] md:w-auto !text-center md:!text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>
      </div>
      <div className="relative z-20 mt-8">
        <ServiceCards
          cardsData={developmentCardsData}
          className={"justify-center"}
        />
      </div>
    </div>
  );
};
