import { Button, Pill } from "@/components/comman";
import { seeMoreProjects } from "@/utils/mockData";
import { IoIosArrowRoundForward } from "react-icons/io";

export const SeeProjects = () => {
  return (
    <div className="mt-16 md:mt-40 px-5 lg:mt-52 mx-auto">
      <div className="flex justify-start">
        <h1 className="title_text">See more projects</h1>
      </div>
      <div className="overflow-hidden  mt-14 pb-10 overflow-x-auto w-full scroll_hidden">
        <div className="flex gap-14 items-center">
          {seeMoreProjects?.map((project, index) => (
            <div
              key={index}
              className="flex flex-col-reverse xl:justify-center gap-8"
            >
              <div className=" flex items-start flex-col gap-4">
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
          ))}
        </div>
      </div>
    </div>
  );
};
