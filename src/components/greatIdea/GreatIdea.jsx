import Link from "next/link";
import { GreatIdeaMockData } from "@/utils/mockData";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ShineImg } from "../../../public/assets";
import { Button, OptimizedImage } from "../comman";

export const GreatIdea = () => (
  <div className="mt-[200px]">
    <div className="flex relative items-center flex-col">
      <OptimizedImage src={ShineImg} className="absolute" />
      <div className="flex  relative z-10 gap-y-[32px] items-center mt-24 flex-col">
        <h1 className="title_text !text-[28px] md:!text-[48px]">
          {GreatIdeaMockData.title}
        </h1>
        <p className="description_text w-[350px] text-center lg:w-full">
          {GreatIdeaMockData.subtitle}
        </p>
        <Link href={"contact"}>
          {/* <Button
            className="!w-[329px] !h-[33px] md:!w-[167px] md:!h-[48px]"
            variant="primary"
            icon={<IoIosArrowRoundForward size={25} />}
          >
            Contact Us
          </Button> */}
        </Link>
      </div>
    </div>
  </div>
);
