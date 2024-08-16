"use client";

import { clientExpectationMockData, OurQualityData } from "@/utils/mockData";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Count } from "@/components/ui/CountingAnimation";
import { Button, OptimizedImage } from "@/components/comman";
import { FilterImg, Spline } from "../../../public/assets";

export const ClientExpectation = () => (
  <div className="!mt-16 md:!mt-10 lg:!mt-[160px]">
    <div className="flex px-5 justify-center">
      <div className="flex flex-col relative items-center w-[1326px] mx-[20px] xl:mx-auto py-[72px] bg-lines rounded-[72px] bg-[#101010]">
        <OptimizedImage
          src={FilterImg}
          height={"100%"}
          width={"100%"}
          className="absolute hidden 2xl:block top-0 right-[-100px] z-10"
        />
        <div className="flex flex-col gap-6 px-2 items-center">
          <h1 className="title_text !text-primary-normal md:w-[737px]">
            {clientExpectationMockData.title}
          </h1>
          <p className="description_text text-center md:w-[737px]">
            {clientExpectationMockData.description}
          </p>
        </div>
        <div className="client-project_counts px-5 flex-col flex-wrap lg:flex-row gap-6 lg:gap-[120px] flex items-center justify-center mt-[140px]">
          <div className="lg:hidden flex items-center ">
            <div className="flex flex-col w-[150px] items-center">
              <Count
                value={"100+"}
                label={"+"}
                className="font-unbound font-semibold flex !text-[16px] sm:!text-[24px] lg:!text-[64px] text-neutral"
              />
              <div>
                <p className="description_text !text-[12px] sm:!text-[10px] lg:!text-[16px]">
                  projects
                </p>
              </div>
            </div>
            <div className="flex flex-col  w-[150px] items-center">
              <Count
                value={"150+"}
                label={"+"}
                className="font-unbound font-semibold flex !text-[16px] sm:!text-[24px] lg:!text-[64px] text-neutral"
              />
              <p className="description_text !text-[12px] sm:!text-[10px] lg:!text-[16px]">
                Feedbacks
              </p>
            </div>
          </div>

          <div className="lg:flex  hidden flex-col w-[230px] gap-y-6 items-center">
            <Count
              value={"100+"}
              label={"+"}
              className=" font-unbound font-semibold flex !text-[16px] sm:!text-[24px] lg:!text-[64px] text-neutral"
            />
            <div>
              <p className="description_text !text-[12px] sm:!text-[10px] lg:!text-[16px]">
                projects
              </p>
            </div>
          </div>
          <div className="lg:flex hidden  flex-col  w-[230px] gap-y-6 items-center">
            <Count
              value={"150+"}
              label={"+"}
              className="font-unbound font-semibold flex !text-[16px] sm:!text-[24px] lg:!text-[64px] text-neutral"
            />
            <p className="description_text !text-[12px] sm:!text-[10px] lg:!text-[16px]">
              Feedbacks
            </p>
          </div>

          <div className="lg:hidden flex border border-secondary-borderDark w-[340px]" />
          <div className="lg:hidden flex border absolute border-secondary-borderDark h-[250px] " />
          <div className="lg:hidden flex">
            <div className="flex flex-col  w-[150px]  items-center">
              <Count
                value={"7+"}
                label={"+"}
                className="font-unbound font-semibold flex !text-[16px] sm:!text-[24px] lg:!text-[64px] text-neutral"
              />
              <p className="description_text !text-[12px] sm:!text-[10px] lg:!text-[16px]">
                Years Experince
              </p>
            </div>
            <div className="flex flex-col  w-[150px]  items-center">
              <Count
                value={"10+"}
                label={"+"}
                className="font-unbound font-semibold flex !text-[16px] sm:!text-[24px] lg:!text-[64px] text-neutral"
              />
              <p className="description_text !text-[12px] sm:!text-[10px] lg:!text-[16px]">
                Expert Devs
              </p>
            </div>
          </div>

          <div className="lg:flex  hidden flex-col  w-[230px] gap-y-6 items-center">
            <Count
              value={"7+"}
              label={"+"}
              className="font-unbound font-semibold flex !text-[16px] sm:!text-[24px] lg:!text-[64px] text-neutral"
            />
            <p className="description_text !text-[12px] sm:!text-[10px] lg:!text-[16px]">
              Years Experince
            </p>
          </div>
          <div className="lg:flex  hidden  flex-col  w-[230px] gap-y-6 items-center">
            <Count
              value={"10+"}
              label={"+"}
              className="font-unbound font-semibold flex !text-[16px] sm:!text-[24px] lg:!text-[64px] text-neutral"
            />
            <p className="description_text !text-[12px] sm:!text-[10px] lg:!text-[16px]">
              Expert Devs
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-wrap justify-center max-w-[279px] md:max-w-max gap-4 lg:gap-14 mt-[80px]">
          {OurQualityData?.map((items, i) => (
            <div key={i} className="flex gap-3 items-center">
              <OptimizedImage src={items.icon} />
              <h2 className="description_text !text-[10px] lg:!text-[18px]">{items.name}</h2>
            </div>
          ))}
        </div>
        {/* <Button
          variant="outline"
          icon={<IoIosArrowRoundForward size={25} />}
          className={"py-[14px] px-[56px] mt-[76px]"}
        >
          View All Projects{" "}
        </Button> */}
        <OptimizedImage
          src={Spline}
          height={"100%"}
          width={"100%"}
          className="absolute hidden xl:block left-[-150px] bottom-0"
        />
      </div>
    </div>
  </div>
);
