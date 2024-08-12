import { Button } from "@/components/comman";
import { aboutBannerMockData, bannerMockData } from "@/utils/mockData";
import { IoIosArrowRoundForward } from "react-icons/io";

export const BannerSection = () => (
  <div className="mt-[85px] w-full">
    <div className="flex max-w-[1440px] justify-center mx-auto">
      <div className="flex items-center px-5 justify-center flex-wrap gap-10 lg:gap-60">
        <div className="flex flex-col gap-8  xl:w-[469px]">
          <h1 className="title_text !leading-[19.84px] md:!leading-[59.52px] !text-[16px] md:!text-[48px] xl:!text-start">
            {aboutBannerMockData.title}
          </h1>
          <p className="description_text !text-xs md:!text-xl !leading-[14.52px] md:!leading-8 text-center xl:!text-start">
            {aboutBannerMockData.description}
          </p>
          <div className="flex flex-col lg:flex-row  justify-center xl:justify-start items-center gap-[40px] z-20">
            <Button
              variant="primary"
              className={"py-4 px-4 xl:px-6 w-full md:w-auto  !h-[52px]"}
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
        <div
          className="w-[320px] sm:w-[616px] xl:w-[568px]
         h-[328px] sm:h-[350px] xl:h-[568px] bg-primary-imageTestColor rounded-xl"
        >
          {/* Image here */}
        </div>
      </div>
    </div>
  </div>
);
