import { IoIosArrowRoundForward } from "react-icons/io";
import { projects } from "@/utils/mockData";
import { Button, OptimizedImage, Pill } from "../comman";

export const FeatureProjects = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-wrap gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex justify-center flex-col lg:flex-row items-center xl:justify-between flex-wrap gap-[88px] lg:gap-60"
        >
          <div className="order-1 flex items-start flex-col gap-4 justify-center">
            <h1 className="text-[24px] text-neutral  font-inter font-semibold">
              {project.title}
            </h1>
            <div className="flex w-[320px] lg:w-[400px] flex-wrap  gap-2 lg:gap-3">
              {project.tags.map((tag, index) => (
                <Pill key={index} className={""} text={tag} />
              ))}
            </div>
            <Button
              variant="transparent"
              icon={<IoIosArrowRoundForward size={25} />}
              className={"!p-0 capitalize !h-0 mt-[32px] font-semibold"}
            >
              See Project
            </Button>
          </div>
          <div className="flex lg:order-2">
            <OptimizedImage
              src={project.image}
              className="w-[350px] lg:w-auto"
              alt={project.title}
            />
          </div>
        </div>
      ))}

      <Button
        variant="primary"
        className={"w-[275px] mt-[56px] lg:mt-[129px]"}
        icon={<IoIosArrowRoundForward size={25} />}
      >
        View All Projects
      </Button>
    </div>
  );
};
