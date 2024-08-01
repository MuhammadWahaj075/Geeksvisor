"use client";

import { testimonials } from "@/utils/mockData";
import { InfiniteMovingCards } from "../../ui/InfiniteMovingCards";

export function InfiniteMovingImages() {
  return (
    <div className="mt-[90px] lg:mt-[200px] mx-auto flex max-w-[1900px]  items-center justify-center">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}
