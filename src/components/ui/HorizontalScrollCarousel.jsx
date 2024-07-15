"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { cards } from "@/utils/mockData";
import { Card } from "../Home/HorizontalCards";

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-73%"]);

  return (
    <section ref={targetRef} className="relative h-[150vh]">
      <div className="sticky mx-auto max-w-[2000px] top-0 flex h-[70vh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards?.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
