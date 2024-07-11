"use client";

import { testimonials } from "@/utils/mockData";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";


export function InfiniteMovingImages() {
  return (
    <div className="mt-[200px] items-center justify-center">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}


