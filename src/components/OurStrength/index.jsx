import { OurStrengthData } from "@/utils/mockData"
import { OptimizedImage } from "../comman"
import { CloudImg } from "../../../public/assets"

export const OurStrength = () => {
    return (
        <div className="!mt-16 md:!mt-10 lg:!mt-[160px] max-w-screen-xl mx-auto">
            <div className="flex flex-col gap-y-16 ">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <h1 className="title_text">Our Strength</h1>
                    <p className="description_text text-center w-[320px] lg:w-[605px]">
                        We recognized for the following exceptional services
                    </p>
                </div>
                <div className="grid grid-cols-1 px-5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {OurStrengthData?.map((item, index) => (
                        <div className={`relative p-5 hover:scale-105 transition duration-500 bg-secondary-bannerPill rounded-3xl shadow-lg 
                            ${index === 0 ? "lg:row-span-2" : ""}`}>

                            <div  >
                                {index === 0 && <OptimizedImage src={CloudImg} className={'object-cover rounded-3xl h-[196.66px]'} />}
                                <div key={item?.id} className="p-4 flex flex-col gap-3 ">
                                    <div>
                                        <OptimizedImage src={item?.image} width={120} height={120} />
                                    </div>
                                    <h3 className="text-xl font-inter text-neutral font-semibold">{item?.title}</h3>
                                    <p className="mt-2 description_text">{item?.description}</p>
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
    )
}





