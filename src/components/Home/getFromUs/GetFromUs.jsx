import { HorizontalScrollCarousel } from "@/components/ui/HorizontalScrollCarousel";

export const GetFromUs = () => (
  <div className="!mt-16 md:!mt-10 lg:!mt-[160px]">
    <div className="flex items-center flex-col justify-center">
      <div className="flex flex-col gap-4 items-center text-center">
        <h1 className="title_text">What can you get from us?</h1>
        <p className="w-[350px] lg:w-[527px] description_text">
        Grow your SaaS business with our AI-driven, revenue-focused, and scalable solutions.
        </p>
      </div>
      <div className="bg-gradient-lines w-full bg-no-repeat mt-[72px]">
        <HorizontalScrollCarousel />
      </div>
    </div>
  </div>
);
