import { OptimizedImage } from "@/components/comman";
import { Spline } from "../../../../public/assets";
import { developmentCardsData } from "@/utils/mockData";
import { ServiceCards } from "../serviceCards";

export const Development = () => {
  return (
    <div className="mt-10 relative md:mt-[132px] px-5 lg:mt-[200px]">
      <OptimizedImage
        src={Spline}
        height={"100%"}
        width={"100%"}
        className="absolute hidden md:block top-[-100px] lg:top-[-170px]  right-[-40px] bottom-0"
      />
      <div className="!max-w-[1250px] mx-auto">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h1 className="title_text !text-[16px] md:!text-[24px] lg:text-[32px]">Development</h1>
          <p className="description_text !text-center md:!text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>
      </div>
      <div className="relative z-20 mt-8">
      <ServiceCards cardsData={developmentCardsData} className={" justify-center md:justify-start"} />
      </div>
    </div>
  );
};
