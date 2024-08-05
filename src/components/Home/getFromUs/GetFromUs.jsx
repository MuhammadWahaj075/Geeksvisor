import { HorizontalScrollCarousel } from "@/components/ui/HorizontalScrollCarousel";

export const GetFromUs = () => (
  <div className="mt-[170px]">
    <div className="flex items-center flex-col justify-center">
      <div className="flex flex-col  items-center text-center">
        <h1 className="title_text">What can you get from us?</h1>
        <p className="w-[350px] lg:w-[527px] description_text">
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
