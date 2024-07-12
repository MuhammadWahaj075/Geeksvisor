"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { cards } from "@/utils/mockData";

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-73%"]);

  return (
    <section ref={targetRef} className="relative h-[120vh]">
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

const Card = ({ card }) => {
  return (
    <div
      key={card?.id}
      className="group flex flex-col lg:flex-row gap-8 lg:gap-[100px] items-center justify-center w-[380px] h-[380px] lg:w-[850px] 
      lg:h-[510px] rounded-[32px] overflow-hidden bg-[#0F0F0F]"
    >
      <Image src={card?.url} alt="img" width={"auto"} height={"auto"} />
      <div className="grid place-content-center gap-4">
        <p className="text-[24px] text-neutral font-medium leading-[29px]">
          {card?.title}
        </p>
        <p className="w-[320px] lg:w-[360px] text-secondary-light opacity-[60%] text-[18px] leading-[26px] font-normal">
          {card?.description}
        </p>
      </div>
    </div>
  );
};
