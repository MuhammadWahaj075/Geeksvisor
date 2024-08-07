import { Pill } from "@/components/comman";

export const DetailSection = ({ title, description }) => {
  return (
    <div className="mt-14 lg:mt-36">
      <div className="section flex px-5 justify-between">
        <h1 className="title_text !text-start">{title}</h1>
        <p className="description_text lg:!text-[18px] md:!text-[16px] !text-[12px] w-[193px] leading-[14.52px] md:w-[474px]">
          {description}
        </p>
      </div>
    </div>
  );
};
