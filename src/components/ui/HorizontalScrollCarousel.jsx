"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { cards } from "@/utils/mockData";
import { Card } from "../Home/HorizontalCards";

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [xValue, setXValue] = useState(["2%", "-75%"]);

  useEffect(() => {
    const updateXValue = () => {
      if (window.innerWidth <= 768) {
        setXValue(["1%", "-85%"]);
      }
        else if (window.innerWidth <= 1280) {
          setXValue(["1%", "-75%"]);
        }
       else {
        setXValue(["2%", "-75%"]);
      }
    };

    updateXValue();

    window.addEventListener("resize", updateXValue);

    return () => window.removeEventListener("resize", updateXValue);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], xValue);

  return (
    <section ref={targetRef} className=" h-[300vh]">
      <div className="sticky top-[240px]  flex bottom-0 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards?.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
