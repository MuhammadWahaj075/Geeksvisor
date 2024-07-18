import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export const Count = ({ value, label, className }) => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const [count, setCount] = useState(0);
  const targetCount = parseInt(value?.replace(/[^\d]/g, ""), 10);
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        if (count < targetCount) {
          setCount((prevCount) => prevCount + Math.ceil(targetCount / 50));
        } else {
          clearInterval(interval);
        }
      }, 20);
      return () => clearInterval(interval);
    }
  }, [inView, count, targetCount]);
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className={`count ${className}`}
    >
      {count.toLocaleString()}
      <div className="reach">{label}</div>
    </motion.div>
  );
};