import { testimonialLogos, testimonials } from "@/utils/mockData";
import Image from "next/image";

export const TestimonialsLogos = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-[64px]">
      {testimonialLogos?.map((logo, index) => (
        <Image
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
