import { servingIndustries } from "@/utils/mockData";
import { OptimizedImage } from "../comman";

import "./style.css";

export const ServingIndustries = () => (
  <div className="mt-[206px] mx-auto px-4 lg:w-[1164px] center-div">
    <div className="flex-center-column text-center">
      <div className="flex justify-center items-center flex-col">
        <h2 className="title_text level-1 font-bold text-[32px] text-center">
          Serving all Industries
        </h2>
        <p className="description_text w-[320px] lg:w-[653px] mt-[16px] text-center">
          See what our satisfied clients are saying about our exceptional
          services and personalized approach to their unique business needs.
        </p>
      </div>
    </div>
    <div className="animated-border">
      <div className="mt-[72px] h-full w-[320px] sm:w-[500px] mx-auto lg:w-full lg:h-[304px] flex-col lg:flex-row flex items-center bg-[#0A0A0A] rounded-[40px] border  mb-[30px]">
        {servingIndustries?.map((item, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center">
            <div className="h-[50px] lg:h-0  lg:w-[50px] border-[0.5px] border-[#B1B1B1]" />
            <div className="flex justify-center flex-col items-center w-[85px] h-[85px] border border-[#B1B1B1] rounded-[12px]">
              <OptimizedImage
                src={item?.icon}
                className="rounded-[8px] h-[31.85px] w-[35.81px]"
              />
              <p className="description_text !text-[12px] mt-[8px]">
                {item?.name}
              </p>
            </div>
            <div className="h-[50px] lg:h-0 lg:w-[83.5px] border-[0.5px] border-[#B1B1B1]" />
            {index < servingIndustries.length - 1 && (
              <div className="dot w-2 h-2 bg-primary rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);
