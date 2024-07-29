import { IoIosArrowRoundForward } from "react-icons/io";

import { Button, OptimizedImage } from "@/components/comman";
import { ShineImg } from "../../../../public/assets";

export const GreatIdea = () => {
  return (
    <div className="mt-[200px]">
      <div className="flex relative items-center flex-col">
        <OptimizedImage src={ShineImg} alt="shine-img" className="absolute" />
        <div className="flex  relative z-10 gap-[32px] items-center mt-24 flex-col">
          <h1 className="title_text !text-[28px] md:!text-[48px]">Have a great idea?</h1>
          <p className="description_text w-[350px] text-center lg:w-full">
            Let’s work together to a better future with your idea!
          </p>

          <Button className="!w-[329px] !h-[33px] md:!w-[167px] md:!h-[48px]" variant="primary" icon={<IoIosArrowRoundForward size={25} />}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};
