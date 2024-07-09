import Image from "next/image";
import { InfiniteImg } from "../../../public/assets";

export function WhoWeAre () {
  return (
    <div className="mt-[200px]">
      <div className="flex items-center justify-center flex-wrap gap-[100px] ">
        <Image
          src={InfiniteImg}
          className=" w-[500px] h-[500px] rounded-[8px]"
        />
        <div className="flex flex-col items-center  lg:items-start">
          <h1 className="title_text !text-neutral">Who we are</h1>
          <p className="text-center lg:text-start w-[350px] lg:w-[540px] description_text">
            Our aim is to provide top-quality services that help businesses of
            all sizes achieve their goals. We strive to deliver innovative,
            cost-effective solutions that meet our clients' unique needs, and to
            build long-term relationships based on collaboration, communication,
            and trust.
          </p>
        </div>
      </div>
    </div>
  );
};
