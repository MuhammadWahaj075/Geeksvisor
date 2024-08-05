"use client";

import React from "react";
import { OptimizedImage } from "../comman";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
}) => {
  const {
    containerRef,
    scrollerRef,
    start,
    pauseOnHover: hookPauseOnHover,
  } = useInfiniteScroll(direction, speed, pauseOnHover);

  return (
    <div
      ref={containerRef}
      className={"scroller relative z-20 max-w-full overflow-hidden"}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${start && "animate-scroll"
          } ${hookPauseOnHover && "hover:[animation-play-state:paused]"}`}
      >
        {items?.map((item, i) => (
          <li
            className="w-[350px] max-w-full relative flex-shrink-0"
            key={item.name}
          >
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5"
            ></div>
            <OptimizedImage
              src={item.image}
              width={"100%"}
              height={"100%"}
              className="object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
