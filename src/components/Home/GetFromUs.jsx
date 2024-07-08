import { HorizontalScrollCarousel } from "../ui/HorizontalScrollCarousel";

export const GetFromUs = () => {
  return (
    <div className="mt-[170px]">
      <div className="flex items-center flex-col justify-center">
        <div className="text-center">
          <h1 className="title_text text-neutral">What can you get from us?</h1>
          <p className="lg:w-[527px] description_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>
        <div className="bg-gradient-lines w-full bg-no-repeat mt-[72px]">
          <HorizontalScrollCarousel />
        </div>
      </div>
    </div>
  );
};
