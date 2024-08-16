export const DetailSection = ({ title, description }) => {
  return (
    <div className="mt-16 md:mt-40 lg:mt-36">
      <div className="section flex gap-12 px-5 justify-between">
        <h1 className="title_text !leading-[19.84px] sm:!leading-[40px] !text-[16px] md:!text-[24px] lg:!text-[32px] w-[111px] sm:w-[616px] lg:w-auto !text-start">
          {title}
        </h1>
        <p
          className="description_text  lg:!text-[18px]
         md:!text-[14px] !text-[12px] leading-[14.52px] w-[320px] sm:w-[600px] lg:w-[474px]"
        >
          {description}
        </p>
      </div>
    </div>
  );
};
