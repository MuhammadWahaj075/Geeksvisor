import "./style.css"
import { Button, OptimizedImage } from '@/components/comman'
import { first3DLogo, second3DLogo } from '../../../../public/assets'

export const Consultation = () => (
  <div className="w-full mx-auto mt-[274px] flex justify-center items-center relative">
    <OptimizedImage src={second3DLogo} className="left-logo" />
    <div className="xl:w-[1161px] md:w-[80%] sm:w-[80%] w-[80%] md:h-[478px] sm:h-[323.82px] h-auto border sm:rounded-[72px] rounded-[28px] flex flex-col items-center justify-center">
      <div className="xl:w-[483px] md:w-[483px] w-[90%] text-center">
        <h1 className="title_text">Get free consultation with GeeksVisor</h1>
        <p className="description_text md:mt-[36px] sm:mt-[15px] mt-[12px]">
          Unlock custom software solutions tailored to your business needs
        </p>
      </div>
      <Button className="sm:w-[230px] w-[90%] h-[48px] md:mt-[36px] sm:mt-[15px] mt-[12px]">
        Book a Call
      </Button>
    </div>
    <OptimizedImage src={first3DLogo} className="right-logo" />
  </div>
)
