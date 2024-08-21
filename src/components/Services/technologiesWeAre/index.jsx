import { technologiesWeAre, technologyCardsData } from "@/utils/mockData";
import Link from "next/link";
import { Button } from "@/components/comman";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TechnologyCards } from "./technologyCards/Card";

export const TechnologiesWeAre = () => {
  return (
    <div className="relative z-10 mt-10  max-w-[1440px] mx-auto md:mt-[132px] px-5 lg:mt-[200px]">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="title_text !text-[16px] md:!text-[24px] lg:!text-[32px]">
          {technologiesWeAre.title}
        </h1>
        <p className="description_text w-[320px] md:w-[474px] !leading-[14.52px] md:!leading-[22px] lg:!leading-[26px] !text-[12px] md:!text-[14px] lg:!text-[18px]  !text-center">
          {technologiesWeAre.description}
        </p>
      </div>
      <div
        className={`flex mt-8 max-w-[1200px] mx-auto items-center gap-4 md:gap-6 flex-wrap justify-center`}
      >
        {technologyCardsData.map((card) => (
          <TechnologyCards
            className
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      <div className="flex justify-between mx-auto max-w-[1200px] md:flex-row flex-col items-center gap-4 mt-10 md:mt-24 lg:mt-20 ">
        <Link
          className="text-primary-light font-inter font-normal text-[18px]"
          href={"#"}
        >
          Need something else?
        </Link>
        <Button
          variant="primary"
          className={"py-4 px-4 xl:px-6 w-full md:w-auto  !h-[52px]"}
          icon={<IoIosArrowRoundForward size={25} />}
        >
          Contact us
        </Button>
      </div>
    </div>
  );
};
