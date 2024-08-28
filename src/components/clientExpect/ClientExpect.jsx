"use client";

import { clientExpectationMockData, OurQualityData } from "@/utils/mockData";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Count } from "@/components/ui/CountingAnimation";
import { Button, OptimizedImage } from "@/components/comman";
import { FilterImg, Spline } from "../../../public/assets";

export const ClientExpectation = () => (
  <div className="!mt-16  md:!mt-10 lg:!mt-[160px]">
    <div className="flex  px-5 justify-center">
      <div className="flex  flex-col relative items-center !w-[360px] sm:!w-[1326px] py-6 sm:py-[35.93px] lg:py-[72px] bg-lines rounded-[72px] bg-[#101010]">
        <OptimizedImage
          src={FilterImg}
          className="absolute overflow-hidden top-[-20px] sm:top-[-60px] right-[-20px] sm:right-[-20px] 2xl:top-[-100px] 2xl:right-[-60px] w-[79px] h-[79px] sm:w-[125px] sm:h-[125px] xl:w-[247.25px] xl:h-[250px] z-10"
        />

        <div className="flex flex-col gap-6 px-2 items-center">
          <h1 className="title_text !text-primary-normal  w-[279px] sm:w-[539px] lg:w-[737px]">
            {clientExpectationMockData.title}
          </h1>
          <p className="description_text text-center w-[279px] sm:w-[539px] lg:w-[737px]">
            {clientExpectationMockData.description}
          </p>
        </div>
        <div className="client-project_counts px-5 flex-col flex-wrap sm:flex-row gap-6 lg:gap-[120px] flex items-center justify-center mt-16">
          <div className="sm:hidden flex items-center ">
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

          <div className="sm:flex  hidden flex-col w-[100px] lg:!w-[150px]  gap-y-6 items-center">
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
          <div className="sm:flex hidden  flex-col w-[100px] lg:!w-[150px]  gap-y-6 items-center">
            <Count
              value={"150+"}
              label={"+"}
              className="font-unbound font-semibold flex !text-[16px] sm:!text-[24px] lg:!text-[64px] text-neutral"
            />
            <p className="description_text !text-[12px] sm:!text-[10px] lg:!text-[16px]">
              Feedbacks
            </p>
          </div>

          <div className="sm:hidden flex border border-secondary-borderDark w-[250px]" />
          <div className="sm:hidden flex border absolute border-secondary-borderDark h-[200px] " />
          <div className="sm:hidden flex">
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

          <div className="sm:flex  hidden flex-col w-[100px] lg:!w-[150px] gap-y-6 items-center">
            <Count
              value={"7+"}
              label={"+"}
              className="font-unbound font-semibold flex !text-[16px] sm:!text-[24px] lg:!text-[64px] text-neutral"
            />
            <p className="description_text !text-[12px] sm:!text-[10px] lg:!text-[16px]">
              Years Experince
            </p>
          </div>
          <div className="sm:flex  hidden  flex-col w-[100px] lg:!w-[150px]  gap-y-6 items-center">
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
        <div className="flex md:flex-row flex-wrap  mx-auto sm:justify-center max-w-[240px] sm:max-w-max gap-4 lg:gap-14  sm:mt-12 mt-16">
          {OurQualityData?.map((items, i) => (
            <div key={i} className="flex gap-[6.24px] lg:gap-3 items-center">
              <OptimizedImage src={items.icon} className='h-[6.25px] w-[8.47px] sm:h-[12.47px] sm:w-[12.47px] lg:w-auto lg:h-auto' />
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
          className="absolute bottom-[-20px] sm:bottom-[-60px] left-[-20px] sm:left-[-60px] w-[86.43px] h-[86.43px] sm:h-[163.3px] sm:w-[163.3px] xl:w-[242.44px] xl:h-[244.77px]"
        />
      </div>
    </div>
  </div>
);
