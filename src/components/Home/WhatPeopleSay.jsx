"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { OptimizedImage } from "../comman";
import { StarIcon } from "../../../public/assets";
import { ProfileRatingData } from "@/utils/mockData";
import Masonry from "react-masonry-css";

const scrollVariants = {
  animate: {
    y: [0, -2000],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 45,
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

  const duplicatedData = [...ProfileRatingData, ...ProfileRatingData];

  return (
    <div className="mt-52">
      <div className="flex flex-col gap-y-[70px]">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <h1 className="title_text">What people say?</h1>
          <p className="description_text text-center w-[320px] lg:w-[605px]">
            See what our satisfied clients are saying about our exceptional
            services and personalized approach to their unique business needs.
          </p>
        </div>
        <div className="people_cards_wrapper scroll_hidden relative h-[750px] mx-auto overflow-hidden flex items-center justify-center flex-wrap gap-y-8">
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
              {duplicatedData.map(
                (
                  { id, name, designation, profileImage, testimonial, rating },
                  index
                ) => (
                  <div
                    key={id + "-" + index}
                    className="people_cards flex-wrap flex gap-y-8 p-8 flex-col border border-[#1F1F1F] rounded-3xl w-[411px] !h-auto"
                  >
                    <div className="flex">
                      {[...Array(rating)].map((_, i) => (
                        <OptimizedImage
                          key={i}
                          src={StarIcon}
                          alt={"star-icon"}
                        />
                      ))}
                    </div>
                    <p className="description_text">{testimonial}</p>
                    <div className="flex gap-x-2 items-center">
                      <OptimizedImage
                        src={profileImage}
                        alt={"profile"}
                        className={"rounded-full w-14 h-14"}
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
