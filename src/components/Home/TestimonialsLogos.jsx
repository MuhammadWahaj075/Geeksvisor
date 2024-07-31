import { testimonialLogos } from "@/utils/mockData";
import { OptimizedImage } from "../comman";

export const TestimonialsLogos = () => {
  return (
    <div className="flex relative items-center px-5 flex-col sm:flex-row justify-center flex-wrap mt-[90px] gap-[85px]">
      {testimonialLogos?.map((logo, index) => (
        <OptimizedImage
          key={index}
          src={logo.src}
          alt={logo.alt}
          height="100px"
          width="100px"
        />
      ))}
    </div>
  );
};
