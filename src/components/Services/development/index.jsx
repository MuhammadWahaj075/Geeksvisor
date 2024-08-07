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
        className="absolute hidden lg:block top-[-170px]  right-[-40px] bottom-0"
      />
      <div className="!max-w-[1150px] mx-auto">
        <div className="flex flex-col gap-4 items-start">
          <h1 className="title_text">Development</h1>
          <p className="description_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>
      </div>
      <div className="mt-8">
      <ServiceCards cardsData={developmentCardsData} />
      </div>
    </div>
  );
};
