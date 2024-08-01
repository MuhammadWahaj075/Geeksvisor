import { OptimizedImage } from "@/components/comman";
export const Card = ({ card }) => {
  return (
    <div
      key={card?.id}
      className="group flex flex-col lg:flex-row gap-8 lg:gap-[100px] items-center justify-center w-[380px] h-[380px] lg:w-[850px] 
      lg:h-[510px] rounded-[32px] overflow-hidden bg-[#0F0F0F]"
    >
      <OptimizedImage src={card?.url} alt="img" width={"auto"} height={"auto"} />
      <div className="grid place-content-center gap-4">
        <p className="text-[24px] text-neutral font-medium leading-[29px]">{card?.title}</p>
        <p className="w-[320px] lg:w-[360px] text-secondary-light opacity-[60%] text-[18px] leading-[26px] font-normal">
          {card?.description}
        </p>
      </div>
    </div>
  );
};