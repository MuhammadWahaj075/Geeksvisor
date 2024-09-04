"use client";

import { bannerMockData } from "@/utils/mockData";
import { IoIosArrowRoundForward } from "react-icons/io";
import GridBoxAnimation from "@/components/ui/GridBoxAnimation";
import { useCustomRouter } from "@/hooks/useRouter";
import { OptimizedImage, Button, Pill } from "../comman";
import Link from "next/link";
import { motion } from "framer-motion";

const typingAnimation = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.05, // Delay between each letter for typewriter effect
      duration: 0.05,  // Duration of each letter appearance
    },
  }),
};

export const BannerSection = () => {
  const { currentPath } = useCustomRouter();

  const titleElements = [];
  let letterIndex = 0;
  const titleWords = bannerMockData?.title?.split(" ");
  titleWords.forEach((word, wordIndex) => {
    const isFutureProof = word.toLowerCase() === "future" || word.toLowerCase() === "proof,";
    const letters = word.split("");
    letters.forEach((letter) => {
      const key = `letter-${letterIndex}`;
      const letterStyle = isFutureProof ? "bg-clip-text text-transparent bg-[linear-gradient(90deg,#EE6E24_0%,#FF2E00_100%)] pr-[4px]" : "";
      titleElements.push(
        <motion.span
          key={key}
          initial="hidden"
          animate="visible"
          custom={letterIndex}
          variants={typingAnimation}
          style={{ display: "inline-block" }}
          className={letterStyle}
        >
          {letter}
        </motion.span>
      );
      letterIndex++;
    });
    if (wordIndex < titleWords.length - 1) {
      titleElements.push(<motion.span key={`space-${letterIndex}`}>&nbsp;</motion.span>);
      letterIndex++;
    }
  });

  return (
    <div className="relative z-20 w-full">
      <div
        className={`${currentPath === "/work" ? "h-auto mt-[118px]" : ""
          }  mx-auto max-w-[1440px] relative flex items-center h-[290px] md:h-[361px] md:mt-[151px] justify-center`}
      >
        <OptimizedImage
          src={bannerMockData?.images?.filterRightImg}
          className={`${currentPath === "/work"
            ? "mt-[0px] right-[0px]"
            : ""
            } absolute right-0 md:right-[20px] top-[-30px] md:top-[-130px] z-20`}
        />
        <div className="absolute z-[-1] pointer-events-none inset-0 flex items-center justify-center">
          <GridBoxAnimation />
        </div>
        <div className="flex justify-center">
          <div className="flex  flex-col justify-center items-center">
            {currentPath !== "/work" && (
              <Pill
                text={bannerMockData?.subtitle}
                className=" py-2 px-3 normal-case !mb-[24px] !text-[#ccc] font-inter !bg-secondary-bannerPill"
              />
            )}
            <div className="text-[16px] w-full px-5 leading-[19.84px] sm:leading-[40px] lg:leading-[80px]  sm:max-w-[1290px] text-center sm:text-[32px] lg:text-[56px] font-unbound font-bold relative z-20 text-neutral">
              {titleElements}
            </div>
            <div className="flex justify-center flex-col items-center">
              <p className="relative z-20 description_text py-6 lg:py-[40px] text-center w-[350px] sm:w-[600px] lg:w-[700px]">
                {bannerMockData.description}
              </p>
              <div className="flex flex-col md:flex-row !w-full md:!w-auto relative items-center gap-[40px] z-20">
                <Link href={"/contact"}>
                  <Button
                    variant="primary"
                    className={
                      "!py-[8px] sm:!py-[16px] !px-[16px] !w-[328px] sm:!w-[167px] lg:px-[24px] !h-[36px] sm:!h-[52px] hover:icon-move"
                    }
                    icon={
                      <IoIosArrowRoundForward
                        size={25}
                        className=""
                      />
                    }
                  >
                    {bannerMockData?.button1?.text}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <OptimizedImage
          src={bannerMockData.images.filterBottomImg}
          className={`${currentPath === "/work" ? "xl:left-[0px]" : "xl:left-[90px]"
            } absolute z-10 left-0 sm:left-[30px] !hidden md:!block bottom-[-100px]`}
        />
        <OptimizedImage
          src={bannerMockData.images.filterRightImg}
          className={`${currentPath === "/work" ? "xl:left-[0px]" : "xl:left-[90px]"
            } absolute z-10 left-0 sm:left-[30px] !block md:!hidden  bottom-[-50px] lg:bottom-0`}
        />
      </div>
    </div>
  );
};
