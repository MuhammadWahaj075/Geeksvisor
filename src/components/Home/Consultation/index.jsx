import "./style.css"
import { Button, OptimizedImage } from '@/components/comman'
import { first3DLogo, second3DLogo } from '../../../../public/assets'
import { IoIosArrowRoundForward } from "react-icons/io"

export const Consultation = () => (
  <div className="w-full mx-auto   px-5 !mt-16 md:!mt-10 lg:!mt-[160px]  flex justify-center max-w-screen-xl items-center">
    <div className="lg:w-[1161px] relative sm:w-[613px] w-[325px] lg:h-[478px]  sm:h-[325px]  h-[164px] border sm:rounded-[72px] rounded-[28px] flex flex-col items-center justify-center">
      <OptimizedImage src={second3DLogo} className="!w-[70px] !h-[62.88px]  sm:!w-[139.06px] sm:!h-[124.92px] lg:!w-[299px] lg:!h-[285px] left-logo absolute bottom-[-20px] sm:bottom-[-60px] left-[-20px] sm:left-[-60px]" />
      <div className="xl:w-[483px]  mx-auto md:w-[483px] w-[90%] text-center">
        <h1 className="title_text !text-center mx-auto lg:!w-[483px] sm:!w-[550.3px] !w-[260px]">Get free consultation with GeeksVisor</h1>
        <p className="description_text md:mt-[36px] mx-auto lg:!w-[385px] sm:!w-[550.3px] !w-[277px] sm:mt-[15px] mt-[12px]">
          Unlock custom software solutions tailored to your business needs
        </p>
      </div>
      <Button icon={<IoIosArrowRoundForward size={25} />} className="sm:!w-[230px] !w-[90%] sm:!h-12  !h-7  md:mt-[36px] sm:mt-[15px] mt-[12px]">
        Book a Call
      </Button>
      <OptimizedImage src={first3DLogo} className="!w-[69px] !h-[70px] right-logo sm:!w-[137.08px] sm:!h-[139.06px] lg:!w-[305px] lg:!h-[278px] absolute top-[-20px] sm:top-[-60px] right-[-20px] sm:right-[-60px]" />
    </div>
  </div>
)
