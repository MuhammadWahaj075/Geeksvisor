'use client';

import { motion } from 'framer-motion';


export const TechnologyCards = ({ title, description,  }) => {
  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05, rotateX: -10, rotateY: 10 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="!w-[328px] !h-[168px] md:!w-[304px] lg:!w-[272px] flex
     flex-col items-start p-8 md:!h-[241px] bg-[#101010] rounded-xl"
      >
        <div className={"bg-[#D9D9D9] px-4 py-4 h-8 w-8 rounded-xl"} />
        <h1
          className="title_text mt-4 !font-semibold 
      !text-[16px] !leading-[17.36px] sm:!text-[18px]
       md:!leading-[29.76px] lg:!text-[24px] md:!text-start"
        >
          {title}
        </h1>
        <p
          className="description_text mt-3 text-start
       !leading-[22px] !text-[14px] 
        md:!text-[15px] lg:!text-[18px] !font-normal"
        >
          {description}
        </p>
      </motion.div>
    </div>

  );
};
