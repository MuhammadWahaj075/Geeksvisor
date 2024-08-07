import { projectDetailBannerData } from "@/utils/mockData";

export const ProjectDetailBanner = () => {
  return (
    <div className="mt-24">
      <div className="flex items-center gap-10 justify-between flex-wrap px-5">
        <div className="flex flex-col gap-8 justify-center">
          <p className="text-neutral font-inter"><span className="text-secondary-light">Home / </span> <span className="text-secondary-light">Projects / </span> Project Name</p>
          <h1 className="title_text !text-start max-w-[550px]">
            {projectDetailBannerData.title}
          </h1>
          <p className="description_text max-w-[600px]">
            {projectDetailBannerData.description}
          </p>
        </div>
        <div className="flex lg:mt-16 order-2 lg:order-1 items-center w-full lg:items-end lg:justify-end lg:w-auto justify-between lg:flex-col gap-6">
          <div className="status  flex justify-end items-center gap-5 text-center">
            <span className="text-[#CCCCCC] capitalize font-inter">status</span>
            <span className="text-primary capitalize font-inter !rounded-3xl py-2 px-5 bg-primary-pill">
              {projectDetailBannerData.status}
            </span>
          </div>
          <div className="date">
            <p className="flex gap-4 text-neutral font-inter font-medium">
              <span className="text-[#CCCCCC] text-[18px] !font-normal leading-7">
                Completion Date
              </span>
              {projectDetailBannerData.completionDate}
            </p>
          </div>
        </div>
        <div className="flex order-1 lg:order-2 bg-primary-imageTestColor h-[328px] sm:h-[616px] w-[1280px] lg:h-[568px] rounded-xl" />
      </div>
    </div>
  );
};
