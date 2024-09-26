'use client';

import { OptimizedImage } from "@/components/comman";
import { motion } from 'framer-motion';
import './style.css'

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
        <h1 className="title_text develop_card_title">
          {title}
        </h1>
        <p className="description_text develop_card_description">
          {description}
        </p>
      </motion.div>
    </div>
  );
};
