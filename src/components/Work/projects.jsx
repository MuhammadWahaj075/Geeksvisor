import { aboutProjects } from "@/utils/mockData";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button, Pill } from "../comman";

export const WorkProjects = () => {
  return (
    <div className="flex flex-col px-5 items-center">
      <div className="flex justify-center p-4">
        <div className="relative z-20 flex flex-wrap justify-center w-[80%] ">
          {aboutProjects?.map((project, index) => (
            <div key={index} className="p-4 rounded flex ">
              <div className="flex  flex-col-reverse xl:justify-between  gap-8 ">
                <div className=" flex items-start flex-col gap-4 justify-center">
                  <h1 className="text-[24px] text-neutral font-inter font-semibold">
                    {project.title}
                  </h1>
                  <div className="flex w-[320px] lg:w-[400px] flex-wrap gap-2 lg:gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <Pill key={tagIndex} text={tag} />
                    ))}
                  </div>
                  <Button
                    variant="transparent"
                    icon={<IoIosArrowRoundForward size={25} />}
                    className={
                      "!p-0 capitalize !h-0 mt-4 lg:mt-8 font-semibold"
                    }
                  >
                    See Project
                  </Button>
                </div>
                <div className="flex ">
                  <div className="w-[301.63px] h-[300px] rounded-xl bg-primary-imageTestColor lg:h-[500px] lg:w-[568px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="primary"
        className={"w-full sm:w-[162px] mt-[47px] lg:mt-[129px]"}
      >
        Load More
      </Button>
    </div>
  );
};
