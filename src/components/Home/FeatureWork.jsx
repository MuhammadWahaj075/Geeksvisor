import React from "react";

export const FeatureWork = () => {
  return (
    <div className="mt-[150px]">
      <div className="flex items-center flex-col justify-center">
        <div className="h-[20rem] w-auto dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.5] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="text-center">
            <h1 className="text-[32px] font-bold leading-[40px]">
              Featured Work
            </h1>
            <p className="lg:w-[527px] text-[18px] opacity-[60%] leading-[26px] font-normal">
              Take a look at some of our recent projects that showcase our
              expertise and commitment to delivering exceptional results for our
              clients.
            </p>
          </div>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};
