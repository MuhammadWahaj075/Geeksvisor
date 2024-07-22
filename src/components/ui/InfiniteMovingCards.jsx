"use client";

import React, { useEffect, useState } from "react";
import { OptimizedImage } from "../comman";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={"scroller relative z-20 max-w-full overflow-hidden"}
    >
      <ul
        ref={scrollerRef}
        className={` flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${
          start && "animate-scroll"
        }   ${pauseOnHover && "hover:[animation-play-state:paused]"}   `}
      >
        {items?.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative flex-shrink-0"
            key={item.name}
          >
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 "
            ></div>
            <OptimizedImage
              src={item.image}
              alt={item.name}
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
