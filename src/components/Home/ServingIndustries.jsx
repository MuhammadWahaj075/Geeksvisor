import Image from "next/image";
import { servingIndustries } from "@/utils/mockData";
import "./style.css";

export const ServingIndustries = () => (
  <div className="mt-[206px] mx-auto w-[1164px] center-div">
    <div className="flex-center-column text-center">
      <div className="flex justify-center items-center flex-col">
        <h2 className="level-1 font-bold text-[32px] text-center">
          Serving all Industries
        </h2>
        <p className="level-5 lg:w-[653px] opacity-[60%] mt-[16px] text-center">
          See what our satisfied clients are saying about our exceptional
          services and personalized approach to their unique business need
        </p>
      </div>
    </div>
    <div className="mt-[72px] h-[304px] flex items-center  bg-[#0A0A0A] rounded-[40px] border-[0.5px] animated-border  mb-[30px]">
      {servingIndustries?.map((item, index) => (
        <>
          <div className="w-[136px] border-[0.5px] border-[#B1B1B1]" />
          <div className="flex justify-center flex-col items-center w-[85px] h-[85px] border border-[#B1B1B1] rounded-[12px] ">
            <Image
              key={index}
              src={item?.icon}
              className="rounded-[8px] h-[31.85px] w-[35.81px] "
            />
            <p className="level-8 mt-[8px]">{item?.name}</p>
          </div>
        </>
      ))}
    </div>
  </div>
);
