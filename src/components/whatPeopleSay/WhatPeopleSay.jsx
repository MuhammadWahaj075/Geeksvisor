"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProfileRatingData, WhatPeopleSayMockData } from "@/utils/mockData";
import Masonry from "react-masonry-css";
import { OptimizedImage } from "../comman";
import { avatar, StarIcon } from "../../../public/assets";

const scrollVariants = {
  animate: {
    y: [0, -7000], // Adjusted to cover more distance
    transition: {
      y: {
        repeat: Infinity,
        duration: 200, // Adjust duration for smoother and slower scroll
        ease: "linear",
      },
    },
  },
};

export const WhatPeopleSay = () => {
  const [columns, setColumns] = useState(3);

  const updateColumns = () => {
    if (window.innerWidth > 1280) {
      setColumns(3);
    } else if (window.innerWidth >= 768) {
      setColumns(2);
    } else {
      setColumns(1);
    }
  };

  useEffect(() => {
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const loopedData = Array(5)
    .fill([...ProfileRatingData, ...ProfileRatingData])
    .flat();

  return (
    <div className="mt-[96px] lg:mt-60">
      <div className="flex flex-col gap-y-[70px]">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <h1 className="title_text">{WhatPeopleSayMockData.title}</h1>
          <p className="description_text text-center w-[320px] lg:w-[605px]">
            {WhatPeopleSayMockData.description}
          </p>
        </div>
        <div className="people_cards_wrapper scroll_hidden relative h-[700px] mx-auto overflow-hidden flex items-center justify-center flex-wrap gap-y-8">
          <motion.div
            variants={scrollVariants}
            animate="animate"
            className="people_cards_container flex flex-wrap flex-col justify-center"
          >
            <Masonry
              breakpointCols={columns}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {loopedData.map(
                (
                  { id, name, designation, profileImage, testimonial, rating },
                  index
                ) => (
                  <div
                    key={id + "-" + index}
                    className="people_cards flex-wrap flex gap-y-8 p-8 flex-col border border-secondary-borderDark rounded-3xl lg:w-[411px] !h-auto"
                  >
                    <div className="flex">
                      {[...Array(rating)].map((_, i) => (
                        <OptimizedImage
                          key={i}
                          src={StarIcon}
                        />
                      ))}
                    </div>
                    <p className="description_text">{testimonial}</p>
                    <div className="flex gap-x-2 items-center">
                      <OptimizedImage
                        src={avatar}
                        className={"bg-[#b6b6b6] p-2 rounded-full w-14 h-14"}
                      />
                      <div className="flex gap-1 flex-col">
                        <h1 className="font-inter text-white font-semibold leading-[19.36px]">
                          {name}
                        </h1>
                        <p className="!text-sm italic description_text">
                          {designation}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </Masonry>
          </motion.div>
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
