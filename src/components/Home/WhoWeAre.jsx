import { InfiniteImg } from "../../../public/assets";
import { OptimizedImage } from "../comman";

export function WhoWeAre() {
  return (
    <div className="mt-[200px]">
      <div className="flex px-5 items-center gap-4 flex-col-reverse xl:flex-row  justify-center lg:gap-16 mx-auto lg:max-w-screen-xl flex-wrap">
        <OptimizedImage
          src={InfiniteImg}
          className="w-[500px] flex h-[500px] rounded-[8px]"
        />
        <div className="flex flex-col gap-4  items-center lg:items-start">
          <h1 className="title_text !text-neutral">Who we are</h1>
          <p className="text-center lg:text-start  max-w-[500px] description_text">
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
}
