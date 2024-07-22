import { whoWeAreMockData } from "@/utils/mockData";
import { OptimizedImage } from "../comman";

export function WhoWeAre() {
  return (
    <div className="mt-[200px]">
      <div className="flex px-5 items-center gap-4 flex-col-reverse xl:flex-row justify-center lg:gap-16 mx-auto lg:max-w-screen-xl flex-wrap">
        <OptimizedImage
          src={whoWeAreMockData?.image}
          className="w-[500px] flex h-[500px] rounded-[8px]"
          alt="Who we are image"
        />
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <h1 className="title_text !text-neutral">{whoWeAreMockData?.title}</h1>
          <p className="text-center lg:text-start max-w-[500px] description_text">
            {whoWeAreMockData?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
