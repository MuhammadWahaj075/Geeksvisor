import { ShineImg } from "../../../public/assets";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button, OptimizedImage } from "../comman";

export const GreatIdea = () => {
  return (
    <div className="mt-[200px]">
      <div className="flex relative items-center flex-col">
        <OptimizedImage src={ShineImg} alt="shine-img" className="absolute" />
        <div className="flex gap-[32px] items-center mt-24 flex-col">
          <h1 className="title_text !text-[48px]">Have a great idea?</h1>
          <p className="description_text">
            Let’s work together to a better future with your idea!
          </p>

          <Button variant="primary" icon={<IoIosArrowRoundForward size={25} />}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};
