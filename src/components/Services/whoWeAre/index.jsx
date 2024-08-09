import { Button } from "@/components/comman";
import { IoIosArrowRoundForward } from "react-icons/io";

export const WhoWeAre = () => {
  return (
    <div >
      <div className="relative z-10 mt-[200px]">
        <div className="flex px-5 flex-col gap-4 items-center justify-center">
          <h1 className="title_text">Who we are?</h1>
          <p className="description_text text-center max-w-[766px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button
            variant={"transparent"}
            icon={<IoIosArrowRoundForward size={25} />}
            className={"!h-0 mt-4"}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};
