"use client";

import { clientExpectationMockData, OurQualityData } from "@/utils/mockData";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Count } from "@/components/ui/CountingAnimation";
import { Button, OptimizedImage } from "@/components/comman";
import { FilterImg, Spline } from "../../../../public/assets";

export function ClientExpectation() {
  return (
    <div className="mt-[100px] lg:mt-[230px]">
      <div className="flex px-5 justify-center">
        <div className="flex flex-col relative items-center w-[1326px] mx-[20px] xl:mx-auto py-[72px] bg-lines rounded-[72px] bg-[#101010]">
          <OptimizedImage
            src={FilterImg}
            height={"100%"}
            width={"100%"}
            className="absolute hidden 2xl:block top-0 right-[-100px] z-10"
          />
          <div className="flex flex-col gap-6 px-2 items-center">
            <h1 className="title_text !text-[#FFFFFFE5] max-w-[737px]">
             {clientExpectationMockData.title}
            </h1>
            <p className="description_text text-center max-w-[737px]">
             {clientExpectationMockData.description}
            </p>
          </div>
          <div className="client-project_counts flex-col flex-wrap md:flex-row gap-[80px] lg:gap-[180px] flex items-center justify-center mt-[140px]">
            <div className="flex flex-col items-center">
              <Count
                value={"100+"}
                label={"+"}
                className="font-unbound font-semibold flex text-[64px] text-neutral"
              />
              <div>
                <p className="description_text">projects</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Count
                value={"150+"}
                label={"+"}
                className="font-unbound font-semibold flex text-[64px] text-neutral"
              />
              <p className="description_text">projects</p>
            </div>
            <div className="flex flex-col items-center">
              <Count
                value={"7+"}
                label={"+"}
                className="font-unbound font-semibold flex text-[64px] text-neutral"
              />
              <p className="description_text">projects</p>
            </div>
            <div className="flex flex-col items-center">
              <Count
                value={"10+"}
                label={"+"}
                className="font-unbound font-semibold flex text-[64px] text-neutral"
              />
              <p className="description_text">projects</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-14 mt-[80px]">
            {OurQualityData?.map((items, i) => (
              <div key={i} className="flex gap-3 items-center">
                <OptimizedImage src={items.icon} alt="icon" />
                <h2 className="description_text">{items.name}</h2>
              </div>
            ))}
          </div>
          <Button
            icon={<IoIosArrowRoundForward size={25} />}
            className={"py-[14px] px-[56px] mt-[76px]"}
          >
            Lets Connect
          </Button>
          <OptimizedImage
            src={Spline}
            height={"100%"}
            width={"100%"}
            className="absolute hidden xl:block left-[-100px] bottom-0"
          />
        </div>
      </div>
    </div>
  );
}
