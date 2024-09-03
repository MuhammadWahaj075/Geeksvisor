'use client';

import { OptimizedImage } from "@/components/comman";
import { motion } from 'framer-motion';

export const DevelopmentCard = ({ icon, title, description }) => {
  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05, rotateX: -10, rotateY: 10 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="develop_cards w-[156px] h-[182px] md:w-[304px] lg:w-[272px] flex
     flex-col items-center md:items-start gap-4 md:gap-6 p-4 md:p-8 md:h-[298px] bg-[#101010] rounded-xl"
      >
        <OptimizedImage
          src={icon}
          className="bg-card-gradient px-2 py-2 md:w-[48px] rounded-xl"
        />
        <h1 className="title_text !font-medium !text-center !text-[14px] !leading-[17.36px] md:!text-[18px] md:!leading-[29.76px] lg:!text-[24px] md:!text-start">
          {title}
        </h1>
        <p className="description_text text-center md:text-start !leading-[12.1px] md:!leading-[22px] !text-[10px] lead md:!text-[15px] lg:!text-[18px] !font-normal">
          {description}
        </p>
      </motion.div>
    </div>
  );
};
