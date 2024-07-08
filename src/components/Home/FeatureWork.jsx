import { FeatureProjects } from "./FeatureProjects";

export const FeatureWork = () => {
  return (
    <div className="mt-[150px]">
      <div className="flex items-center flex-col justify-center">
        <div className="h-[20rem] w-auto dark:bg-black bg-neutral dark:bg-grid-medium-white/[0.1] bg-grid-medium-black/[0.5] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-neutral [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="text-center">
            <h1 className="title_text">Featured Work</h1>
            <p className="description_text lg:w-[527px] ">
              Take a look at some of our recent projects that showcase our
              expertise and commitment to delivering exceptional results for our
              clients.
            </p>
          </div>
        </div>

        <div>
          <FeatureProjects />
        </div>
      </div>
    </div>
  );
};
