import { IoIosArrowRoundForward } from "react-icons/io";
import { Button, OptimizedImage, Pill } from "../../comman";
import { bannerMockData } from "@/utils/mockData";

export const BannerSection = () => {
  return (
    <div className="relative">
      <div className="h-[50rem] mx-auto w-full max-w-[1440px] bg-grid-white/[0.1] bg-grid-black-100 relative flex items-center justify-center">
        <OptimizedImage
          src={bannerMockData?.images?.filterRightImg}
          height={"100%"}
          width={"100%"}
          alt={"banner-image"}
          className="absolute mt-[95px] top-0 right-[20px] z-10"
        />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="flex justify-center">
          <div className="flex relative z-20 flex-col justify-center items-center">
            <Pill
              text={bannerMockData?.subtitle}
              className="!text-[14px] py-2 px-3 normal-case !mb-[24px] !text-[#ccc] font-inter !bg-[#1b1b1d]"
            />

            <p className="text-[30px] w-full  px-5 leading-[40px] sm:leading-[40px] lg:leading-[80px]  sm:max-w-[1160px] text-center sm:text-[40px] lg:text-[56px] font-unbound font-bold relative z-20 bg-clip-text text-transparent bg-neutral">
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
              <p className="description_text py-[40px] text-center w-[350px] sm:w-[600px] lg:w-[700px]">
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
          alt={"FilterImg"}
          className="absolute left-0 sm:left-[30px] xl:left-[90px] bottom-0"
        />
      </div>
    </div>
  );
};
