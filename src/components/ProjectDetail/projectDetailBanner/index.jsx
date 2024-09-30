import { projectDetailBannerData } from "@/utils/mockData";

export const ProjectDetailBanner = () => {
  return (
    <div className="mt-24">
      <div className="px-5">
        <div className="my-6">
          <p className="text-neutral font-inter">
              <span className="text-secondary-light">Home / </span>{" "}
              <span className="text-secondary-light">Projects / </span> Project
              Name
            </p>  
        </div>
    
        <div className="flex gap-10 w-full lg:justify-between flex-wrap justify-center">
          <div className="flex flex-col gap-8 justify-center">
           
            <h1 className="title_text  !leading-[19.84px] md:!leading-[48px] lg:!leading-[56px]  lg:!text-[40px] md:!text-[32px] !text-[16px] !text-center lg:!text-start mx-auto sm:max-w-[616px] xl:max-w-[700px]">
              {projectDetailBannerData.title}
            </h1>
            <p className="description_text !text-center lg:!text-start !text-[12px] md:!text-[14px] lg:!text-[20px] !leading-[14.52px] lg:!leading-[32px] mx-auto lg:mx-0 md:!leading-[22px] sm:max-w-[400px]">
              {projectDetailBannerData.description}
            </p>
          </div>
          <div className="hidden sm:flex md:mt-14  lg:mt-0  order-2 lg:order-1 items-center w-full lg:items-end lg:justify-end lg:w-auto justify-between lg:flex-col gap-6">
            <div className="status  flex justify-end items-center gap-5 text-center">
              <span className="text-secondary-statusColor capitalize font-inter">
                status
              </span>
              <span className="text-primary capitalize font-inter !rounded-3xl py-2 px-5 bg-primary-pill">
                {projectDetailBannerData.status}
              </span>
            </div>
            <div className="date">
              <p className="flex gap-4 text-neutral lg:!text-[18px]  md:!text-[16px] font-inter font-medium">
                <span className="text-secondary-statusColor  !font-normal leading-7">
                  Completion Date
                </span>
                {projectDetailBannerData.completionDate}
              </p>
            </div>
          </div>

          <div
            className="flex order-1 lg:order-2 bg-primary-imageTestColor h-[328px] sm:h-[616px]
         w-[1280px] lg:h-[568px] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
