"use client";

import { bannerMockData } from "@/utils/mockData";
import { IoIosArrowRoundForward } from "react-icons/io";
import GridBoxAnimation from "@/components/ui/GridBoxAnimation";
import { useCustomRouter } from "@/hooks/useRouter";
import { OptimizedImage, Button, Pill } from "../comman";

export const BannerSection = () => {
  const { currentPath } = useCustomRouter();

  return (
    <div className="relative w-full">
      <div
        className={`${
          currentPath === "/work" ? "h-auto mt-[118px]" : "h-[50rem]"
        }  mx-auto max-w-[1440px] relative flex items-center justify-center`}
      >
        <OptimizedImage
          src={bannerMockData?.images?.filterRightImg}
          height={"100%"}
          width={"100%"}
          className={`${
            currentPath === "/work"
              ? "mt-[0px] right-[0px]"
              : "mt-[95px] right-[20px]"
          } absolute  top-0  z-20`}
        />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center">
          <GridBoxAnimation />
        </div>
        <div className="flex justify-center">
          <div className="flex relative z-20 flex-col justify-center items-center">
            {currentPath !== "/work" && (
              <Pill
                text={bannerMockData?.subtitle}
                className="!text-[14px] py-2 px-3 normal-case !mb-[24px] !text-[#ccc] font-inter !bg-secondary-bannerPill"
              />
            )}
            <p className="text-[30px] w-full px-5 leading-[40px] sm:leading-[40px] lg:leading-[80px] sm:max-w-[1160px] text-center sm:text-[40px] lg:text-[56px] font-unbound font-bold relative z-20 bg-clip-text text-transparent bg-neutral">
              {bannerMockData?.title?.split(" ")?.map((word, index) =>
                word === "Vision" ? (
                  <span key={index} className="text-primary pr-2">
                    {word}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </p>
            <div className="flex justify-center flex-col items-center">
              <p className="relative z-20 description_text py-[40px] text-center w-[350px] sm:w-[600px] lg:w-[700px]">
                {bannerMockData.description}
              </p>
              <div className="flex relative items-center gap-[40px] z-20">
                <Button
                  variant="primary"
                  className={"py-[16px] px-[16px] lg:px-[24px] !h-[52px]"}
                  icon={<IoIosArrowRoundForward size={25} />}
                >
                  {bannerMockData?.button1?.text}
                </Button>
                <Button
                  variant={bannerMockData.button2.variant}
                  icon={<IoIosArrowRoundForward size={25} />}
                  className={"!h-0"}
                >
                  {bannerMockData.button2.text}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <OptimizedImage
          src={bannerMockData.images.filterBottomImg}
          height={"100%"}
          width={"100%"}
          className={`${
            currentPath === "/work" ? "xl:left-[0px]" : "xl:left-[90px]"
          } absolute z-10 left-0 sm:left-[30px]  bottom-0`}
        />
      </div>
    </div>
  );
};
