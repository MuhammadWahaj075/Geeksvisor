import { OurVisionMockData } from "@/utils/mockData";

export const OurVision = () => (
  <div className=" mt-[70px] sm:mt-[160px] h-screen lg:mt-[262px]">
    <div className="relative flex mx-auto px-5 items-center gap-4 justify-center xl:justify-start lg:gap-[118px]  lg:max-w-screen-xl flex-wrap">
      <div
        className="w-auto lg:w-[926.66px]
         mb-4 sm:mb-12 lg:mb-0 flex flex-col gap-5 items-start px-8 pt-8 pb-12 bg-[#1b1b1d7a] shadow-xl rounded-[8px]"
      >
        <h1 className="title_text !text-neutral">Mission</h1>
        <p className="text-start max-w-[600px] lg:max-w-full xl:max-w-[600px] description_text">
          Our mission is to help businesses like yours succeed by providing top-notch cloud and AI solutions. We focus on building future-proof applications that not only meet today's demands but also anticipate tomorrow's challenges. By leveraging cutting-edge technology, we aim to transform your ideas into reality, empowering you to stay ahead of the competition. We're not just another tech company - we're your trusted partners in growth.

        </p>

        <h1 className="title_text !text-neutral">Vision</h1>


        <p className="text-start max-w-[600px] lg:max-w-full xl:max-w-[600px] description_text">
          We believe that the future belongs to those who embrace innovation. Our goal is to stay ahead of the curve by continuously exploring new ways to leverage cloud and AI technology. We envision a world where every business can harness the power of cutting-edge solutions to drive efficiency, innovation, and sustainable success. At the end of the day, we're not just building apps - we're building a better future for businesses everywhere. Join us on this exciting journey and let's reach new heights together!
        </p>
      </div>
      <div
        className="absolute -bottom-52 lg:-bottom-80  xl:bottom-auto xl:right-[30px] rounded-xl bg flex w-[333px] p-8 bg-[linear-gradient(90deg,#c9672f_0%,#FF2E00_100%)]  sm:w-[500px] xl:w-[533px]
          flex-col gap-4 items-start"
      >
        <h1 className="title_text !text-neutral">{OurVisionMockData.title}</h1>
        <p className="text-start !text-neutral description_text">
          {OurVisionMockData.subtitle}
        </p>

        {/* <p className="text-start  description_text">
          {OurVisionMockData.description}
        </p> */}
      </div>
    </div>
  </div>
);
