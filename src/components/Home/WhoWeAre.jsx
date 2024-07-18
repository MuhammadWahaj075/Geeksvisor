import { InfiniteImg } from "../../../public/assets";
import { OptimizedImage } from "../comman";

export function WhoWeAre () {
  return (
    <div className="mt-[200px]">
      <div className="flex items-center gap-4  justify-center lg:justify-center lg:gap-16 mx-auto lg:max-w-screen-xl flex-wrap">
        <OptimizedImage
          src={InfiniteImg}
          className=" w-[500px] flex order-2 xl:order-1 h-[500px] rounded-[8px]"
        />
        <div className="flex flex-col gap-4 order-1 xl:order-2 items-center  lg:items-start">
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
