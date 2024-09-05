import { OurStrengthCardData, OurStrengthData } from "@/utils/mockData"
import { OptimizedImage } from "../comman"
import { CloudImg } from "../../../public/assets"
import './style.css'

export const OurStrength = () => {
    return (
        <div className="!mt-16 md:!mt-10 lg:!mt-[160px] max-w-screen-2xl mx-auto">
            <div className="flex flex-col gap-y-16 ">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <h1 className="title_text">Our Strength</h1>
                    <p className="description_text text-center lg:w-[605px]">
                        We recognized for the following exceptional services
                    </p>
                </div>
                <div className="flex justify-center gap-5 lg:gap-0 px-5 !flex-col 2xl:!flex-row">
                    <div className="flex justify-center">
                        {OurStrengthCardData?.map((item, index) => (
                            <div className={`relative p-5 h-auto w-[100%] sm:max-w-[441.672px] md:!max-w-[900px] our_strength_card 2xl:w-auto hover:scale-105 transition duration-500 bg-secondary-bannerPill 
                            rounded-3xl shadow-lg 
                            `}>
                                <div>
                                    {index === 0 && <OptimizedImage src={CloudImg} className={'object-cover rounded-3xl  h-[196.66px]'} />}
                                    <div key={item?.id} className="p-4 flex flex-col gap-5 ">
                                        <div>
                                            <OptimizedImage src={item?.image} className='!h-[70px] w-auto object-contain' />
                                        </div>
                                        <h3 className="text-xl font-inter text-neutral font-semibold">{item?.title}</h3>
                                        <p className="mt-2 description_text sm:w-[381.656px]">{item?.description}</p>
                                        {/* <Button className="mt-4 absolute bottom-4 !rounded-3xl">
                                    {item?.buttonLabel}
                                </Button> */}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mx-auto flex-wrap  max-w-[1200px] 2xl:w-[1500px] gap-5">
                        {OurStrengthData?.map((item, index) => (
                            <div className={`relative p-5  max-w-[441.672px] sm:h-[351px] hover:scale-105 transition duration-500 bg-secondary-bannerPill 
                            rounded-3xl shadow-lg 
                            `}>

                                <div>
                                    <div key={item?.id} className="p-4 flex flex-col gap-5 ">
                                        <div>
                                            <OptimizedImage src={item?.image} className='!h-[70px] w-auto object-contain' />
                                        </div>
                                        <h3 className="text-xl font-inter text-neutral font-semibold">{item?.title}</h3>
                                        <p className="mt-2 description_text sm:!w-[381.656px]">{item?.description}</p>
                                        {/* <Button className="mt-4 absolute bottom-4 !rounded-3xl">
                                    {item?.buttonLabel}
                                </Button> */}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}





