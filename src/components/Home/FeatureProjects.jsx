import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "../comman/Button";
import { Pill } from "../comman/Pills";
import Image from "next/image";
import { projects } from "@/utils/mockData";

export const FeatureProjects = () => {
  return (
    <div className="flex flex-col items-center flex-wrap gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex items-start mx-auto w-[70%] lg:w-full lg:justify-between flex-wrap gap-[88px] lg:gap-60"
        >
          <div className="order-1  flex items-start flex-col gap-4 justify-center">
            <h1 className="text-[24px] font-inter font-semibold">
              {project.title}
            </h1>
            <div className="flex flex-wrap space-x-2">
              {project.tags.map((tag, index) => (
                <Pill
                  key={index}
                  className={""}
                  text={tag}
                />
              ))}
            </div>
            <Button
              variant="transparent"
              icon={<IoIosArrowRoundForward size={25} />}
              className={"!p-0 capitalize mt-[32px] font-semibold"}
            >
              See Project
            </Button>
          </div>
          <div className="flex lg:order-2">
            <Image src={project.image} className="w-auto" alt={project.title} />
          </div>
        </div>
      ))}

      <Button
        variant="primary"
        className={"w-[275px]"}
        icon={<IoIosArrowRoundForward size={25} />}
      >
        View All Projects
      </Button>
    </div>
  );
};
