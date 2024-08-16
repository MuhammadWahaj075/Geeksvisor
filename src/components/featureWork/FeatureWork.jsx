import { VerticalScrollCarousel } from "./featureCards";
import { featureWorkMockData } from "@/utils/mockData";

export const FeatureWork = () => (
  <div className="!mt-16 md:!mt-10 lg:!mt-[160px]">
    <div className="flex items-center flex-col justify-center">
      <div className="h-[20rem] w-auto !bg-black bg-grid-medium-white/[0.1] dark:bg-grid-medium-black/[0.5] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex  items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="flex gap-y-4 flex-col relative z-20 text-center">
          <h1 className="title_text">{featureWorkMockData?.title}</h1>
          <p className="description_text w-[300px] lg:w-[527px] ">
            {featureWorkMockData?.description}
          </p>
        </div>
      </div>
      <VerticalScrollCarousel />
    </div>
  </div>
);
