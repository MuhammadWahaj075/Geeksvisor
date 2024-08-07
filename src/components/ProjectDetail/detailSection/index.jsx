export const DetailSection = ({ title, description }) => {
  return (
    <div className="mt-14 lg:mt-36">
      <div className="section flex gap-12 px-5 justify-between">
        <h1 className="title_text w-[111px] sm:w-[616px] lg:w-auto !text-start">{title}</h1>
        <p className="description_text  lg:!text-[18px]
         md:!text-[16px] !text-[12px] leading-[14.52px] w-[193px] sm:w-[380px] lg:w-[474px]">
          {description}
        </p>
      </div>
    </div>
  );
};
