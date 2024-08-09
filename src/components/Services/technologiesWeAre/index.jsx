import { technologyCardsData } from "@/utils/mockData";
import Link from "next/link";
import { Button } from "@/components/comman";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TechnologyCards } from "./technologyCards/Card";

export const TechnologiesWeAre = () => {
  return (
    <div className="mt-10 max-w-screen-xl mx-auto md:mt-[132px] px-5 lg:mt-[200px]">
      <div className="">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="title_text !text-[16px] md:!text-[24px] lg:text-[32px]">
            Technologies we are good at
          </h1>
          <p className="description_text ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>
      </div>
      <div
        className={`flex mt-8 items-center gap-4 md:gap-6 flex-wrap justify-center`}
      >
        {technologyCardsData.map((card) => (
          <TechnologyCards
            className
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      <div className="flex md:flex-row flex-col items-center gap-4 mt-10 md:mt-24 lg:mt-20 justify-between">
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
