import { aboutProjects } from "@/utils/mockData";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button, Pill } from "../../comman";

export const WorkProjects = () => {
  return (
    <div className="flex flex-col relative z-20 justify-center px-5 lg:px-0 items-center">
      <div className="flex justify-center items-center mt-10">
        <div className="grid grid-cols-2 gap-10 place-content-center  place-items-start ">
          {aboutProjects?.map((project, index) => (
            <div key={index} className=" flex ">
              <div className="flex  flex-col-reverse xl:justify-between gap-8">
                <div className=" flex items-start flex-col gap-4 justify-center">
                  <h1 className="md:text-[24px] text-neutral font-inter font-semibold">
                    {project.title}
                  </h1>
                  <div className="flex lg:!w-[400px] flex-wrap gap-1 lg:gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <Pill
                        className={"!text-[8px] md:!text-[12px]"}
                        key={tagIndex}
                        text={tag}
                      />
                    ))}
                  </div>
                  <Button
                    variant="transparent"
                    icon={<IoIosArrowRoundForward size={25} />}
                    className={
                      "text-[12px] md:text-[16px] !p-0 capitalize !h-0 mt-4 lg:mt-8 font-semibold"
                    }
                  >
                    See Project
                  </Button>
                </div>
                <div className="flex ">
                  <div className="w-[156px] h-[156px] md:w-[301.63px] md:h-[300px] rounded-xl bg-primary-imageTestColor xl:h-[500px] xl:w-[568px]" />
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
