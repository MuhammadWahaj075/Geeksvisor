import { useState, useEffect } from "react";

export const useResponsiveBoxes = () => {
  const [totalBoxes, setTotalBoxes] = useState(40);

  useEffect(() => {
    const updateTotalBoxes = () => {
      if (window.innerWidth >= 1024) {
        setTotalBoxes(80); // Laptop
      } else if (window.innerWidth >= 768) {
        setTotalBoxes(50); // Tablet
      } else {
        setTotalBoxes(40); // Mobile
      }
    };

    updateTotalBoxes();
    window.addEventListener('resize', updateTotalBoxes);

    return () => window.removeEventListener('resize', updateTotalBoxes);
  }, []);

  return totalBoxes;
};

