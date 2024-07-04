import Image from "next/image";
import {
  TestimonialsLogo,
  TestimonialsLogo2,
  TestimonialsLogo3,
  TestimonialsLogo4,
  TestimonialsLogo5,
  TestimonialsLogo6,
} from "../../../public/assets";

export const TestimonialsLogos = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-[64px]">
      <Image src={TestimonialsLogo} alt="" height="100px" width="100px" />
      <Image src={TestimonialsLogo2} alt="" height="100px" width="100px" />
      <Image src={TestimonialsLogo3} alt="" height="100px" width="100px" />
      <Image src={TestimonialsLogo4} alt="" height="100px" width="100px" />
      <Image src={TestimonialsLogo5} alt="" height="100px" width="100px" />
      <Image src={TestimonialsLogo6} alt="" height="100px" width="100px" />
    </div>
  );
};
