export const TechnologyCards = ({ title, description }) => {
  return (
    <div
      className="!w-[328px] !h-[168px] md:!w-[304px] lg:!w-[272px] flex
     flex-col items-start p-8 md:!h-[241px] bg-[#101010] rounded-xl"
    >
      <div className={"bg-[#D9D9D9] px-4 py-4 h-8 w-8 rounded-xl"} />
      <h1
        className="title_text mt-4 !font-semibold 
      !text-[16px] !leading-[17.36px] sm:!text-[18px]
       md:!leading-[29.76px] lg:!text-[24px] md:!text-start"
      >
        {title}
      </h1>
      <p
        className="description_text mt-3 text-start
       !leading-[22px] !text-[14px] 
        md:!text-[15px] lg:!text-[18px] !font-normal"
      >
        {description}
      </p>
    </div>
  );
};
