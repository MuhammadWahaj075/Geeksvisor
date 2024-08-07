import { Pill } from "@/components/comman";
import { technologies, Technology } from "@/utils/mockData";

export const TechnologiesUsed = () => {
  return (
    <div className="mt-14 lg:mt-36">
      <div className="section flex px-5  flex-wrap gap-8  justify-center lg:justify-between">
        <h1 className="title_text !text-start">{Technology.title}</h1>
        <div className="flex items-center mx-auto w-[90%] lg:mx-0  justify-center lg:w-[474px] lg:items-end lg:justify-start !gap-6 flex-wrap sm:!w-[474px] text-center">
          {technologies.map((tech) => (
            <Pill
              key={tech}
              text={tech}
              className={
                "!text-center normal-case !p-0 font-semibold !text-[12px] md:!text-[16px] !text-[#7A7A7A] !bg-transparent"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
