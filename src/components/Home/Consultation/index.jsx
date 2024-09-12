import "./style.css"
import { Button, OptimizedImage } from '@/components/comman'
import { first3DLogo, second3DLogo } from '../../../../public/assets'
import { IoIosArrowRoundForward } from "react-icons/io"
import Link from "next/link"

export const Consultation = () => (
  <div className="main_consalt w-full mx-auto  px-5 !mt-16 md:!mt
  -10 lg:!mt-[160px]  flex justify-center max-w-screen-xl items-center">
    <div className="inner-div_consalt  lg:w-[1161px] relative sm:w-[613px] w-[325px] lg:h-[478px]  sm:h-[325px]  h-[164px]  sm:rounded-[72px] rounded-[28px] flex flex-col items-center justify-center">
      <OptimizedImage src={second3DLogo} className="!w-[70px] !h-[62.88px] sm:!w-[90px] sm:!h-[90px]  md:!w-[139.06px] md:!h-[124.92px] xl:!w-[299px] xl:!h-[285px] left-logo absolute bottom-[-20px] sm:bottom-[-60px] left-[-20px] sm:left-[-30px] md:left-[-60px]" />
      <div className="xl:w-[483px]  mx-auto md:w-[483px] w-[90%] text-center">
        <h1 className="title_text !text-center mx-auto lg:!w-[483px] sm:!w-[550.3px] !w-[260px]">Get free consultation with GeeksVisor</h1>
        <p className="description_text md:mt-[36px] mx-auto lg:!w-[385px] sm:!w-[550.3px] !w-[277px] sm:mt-[15px] mt-[12px]">
          Unlock custom software solutions tailored to your business needs
        </p>
      </div>

      <Link href={"/contact"}>
        <Button icon={<IoIosArrowRoundForward size={25} />} className="sm:!w-[230px] !w-full sm:!h-12  !h-7  md:mt-[36px] sm:mt-[15px] mt-[12px]">
          Book a Call
        </Button>
      </Link>
      <OptimizedImage src={first3DLogo} className="!w-[69px] !h-[70px] right-logo sm:!w-[90px] sm:!h-[90px]  md:!w-[139.06px] md:!h-[124.92px] xl:!w-[305px] xl:!h-[278px] absolute top-[-20px] sm:top-[-60px] right-[-20px] sm:right-[-25px] md:right-[-60px]" />
    </div>
  </div>
)
