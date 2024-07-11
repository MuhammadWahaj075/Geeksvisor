import { OurQualityData, clientProjectsData } from "@/utils/mockData";
import React from "react";
import Button from "../comman/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import {  FilterImg, Spline } from "../../../public/assets";

export function ClientExpectation() {
  return (
    <div className="mt-[100px] lg:mt-[230px]">
      <div className="flex justify-center">
    
        <div className="flex flex-col relative items-center w-[1326px] mx-[20px] xl:mx-auto py-[72px] bg-lines rounded-[72px] bg-[#101010]">
        <Image
          src={FilterImg}
          height={"100%"}
          width={"100%"}
          className="absolute hidden 2xl:block top-0 right-[-100px] z-10"
        />
          <div className="flex flex-col gap-6 items-center">
            <h1 className="title_text w-[350px] lg:w-[737px]">
              We Always Try To Understand Our Client's Expectation
            </h1>
            <p className="description_text text-center w-[350px] lg:w-[737px]">
              From web apps to mobile apps and everything in between, our recent
              works showcase our expertise in developing innovative solutions
              that meet our clients' unique needs. Contact us now to discuss
              your project!.
            </p>
          </div>
          <div className="client-project_counts flex-col flex-wrap lg:flex-row gap-[80px] lg:gap-[180px] flex items-center justify-center mt-[140px]">
            {clientProjectsData?.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <h1 className="font-unbound font-semibold text-[64px] text-neutral">
                  {item?.number}
                </h1>
                <p className="description_text">{item?.title}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-14 mt-[80px]">
            {OurQualityData?.map((items, i) => (
              <div className="flex gap-3 items-center">
                <Image src={items.icon} alt="icon" />
                <h2 className="description_text">{items.name}</h2>
              </div>
            ))}
          </div>
          <Button
            icon={<IoIosArrowRoundForward size={25} />}
            className={"py-[14px] px-[56px] mt-[76px]"}
          >
            Let’s Connect
          </Button>
        <Image
          src={Spline}
          height={"100%"}
          width={"100%"}
          className="absolute hidden xl:block left-[-100px] bottom-0"
        />
        </div>
      </div>
    </div>
  );
}
