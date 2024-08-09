import { OptimizedImage } from "@/components/comman";

export const TechnologyCards = ({ icon, title, description }) => {
  return (
    <div
      className="develop_cards w-[328px] h-[168px] md:w-[304px] lg:w-[272px] flex
     flex-col items-start gap-4 md:gap-6 p-4 md:p-8 md:h-[241px] bg-[#101010] rounded-xl"
    >
      <OptimizedImage
        src={icon}
        className={"bg-card-gradient px-2 py-2 md:w-[48px] rounded-xl"}
      />
      <h1 className="title_text !font-medium   !text-[14px] !leading-[17.36px] md:!text-[18px] md:!leading-[29.76px] lg:!text-[24px] md:!text-start">
        {title}
      </h1>
      <p className="description_text text-start !leading-[12.1px] md:!leading-[22px] !text-[10px] lead md:!text-[15px] lg:!text-[18px] !font-normal">
        {description}
      </p>
    </div>
  );
};
