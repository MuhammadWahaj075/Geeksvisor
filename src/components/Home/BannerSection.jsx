import Image from "next/image";
import Button from "../comman/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FilterImg, FilterSmallImg } from "../../../public/assets";

export const BannerSection = () => {
  return (
    <div className="relative">
      <div className="h-[50rem] my-[70px] mx-auto w-full max-w-[1440px] !bg-black bg-grid-white/[0.1] bg-grid-black-100/[10] relative flex items-center justify-center">
        <Image
          src={FilterSmallImg}
          height={"100%"}
          width={"100%"}
          className="absolute top-0 right-0 z-10"
        />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="flex justify-center">
          <div className="flex relative z-20 flex-col justify-center items-center">
            <p className="text-center mb-[24px] font-inter bg-secondary-light bg-opacity-30  py-[8px] px-[12px] rounded-[40px]">
              Raise $2.5M for startups
            </p>

            <p className="text-4xl leading-[80px] w-[100%] lg:max-w-[1160px] text-center md:text-[56px] font-unbound font-bold relative z-20 bg-clip-text text-transparent bg-neutral">
              Power Your <span className="text-primary">Vision</span> with Next
              Generation Custom Software
            </p>

            <div className="flex justify-center flex-col items-center">
              <p className="font-inter text-[20px] font-normal leading-[32px] py-[40px] opacity-[60%] text-center lg:w-[700px] ">
                We'll elevate your vision through custom software development as
                your digital transformation partner.
              </p>

              <div className="flex relative gap-[40px] z-20">
                <Button
                  variant="primary"
                  className={"py-[16px] px-[24px]"}
                  icon={<IoIosArrowRoundForward size={25} />}
                >
                  Contact Us
                </Button>
                <Button
                  variant="transparent"
                  icon={<IoIosArrowRoundForward size={25} />}
                >
                  View Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={FilterImg}
          height={"100%"}
          width={"100%"}
          className="absolute left-0 bottom-0"
        />
      </div>
    </div>
  );
};
