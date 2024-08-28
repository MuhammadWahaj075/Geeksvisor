import { OptimizedImage } from "@/components/comman";

export const Card = ({ card }) => (
  <div
    key={card?.id}
    className="flex flex-col  sm:flex-row !w-[326px] !h-[237px] gap-6 lg:gap-[100px] items-center justify-center sm:!w-[616px] sm:!h-[320px] lg:!w-[850px] 
      lg:!h-[510px] rounded-[32px] overflow-hidden bg-[#0F0F0F]"
  >
    <OptimizedImage  className={"w-[100px] h-[100px] object-contain lg:w-[150px] lg:h-[150px]"} src={card?.url} />
    <div className="grid place-content-center gap-4">
      <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-center sm:text-start text-neutral font-medium leading-[29px]">{card?.title}</p>
      <p className="text-[12px] w-[278px] sm:text-[16px] lg:text-[18px] sm:!w-[360px] text-center sm:text-start lg:w-[360px] text-secondary-light opacity-[60%] leading-[14.52px] sm:leading-[26px] font-normal">
        {card?.description}
      </p>
    </div>
  </div>
);
