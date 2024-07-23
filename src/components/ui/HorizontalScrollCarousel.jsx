"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { cards } from "@/utils/mockData";
import { Card } from "../Home/HorizontalCards";

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-70%"]);

  return (
    <section ref={targetRef} className=" relative h-[300vh]">
      <div className="sticky top-[250px] flex  bottom-0 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards?.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
