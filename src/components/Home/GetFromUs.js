import Image from 'next/image'
import dummy from "../../../public/vercel.svg";

export const GetFromUs = () => (
    <div className='mt-[240px] w-[1164px] h-[600px] flex-center'>
        <Image src={dummy} className="rounded-[8px] h-[600px] w-[473px] bg-gray-300" />
        <div className='w-[691px] flex justify-end'>
            <div className='w-[540px] h-[600px] flex-column'>
                <h2 className='level-1'>
                    WhoAreYou
                </h2>
                <p className='level-5 mt-[16px]'>Our aim is to provide top-quality services that help businesses of all sizes achieve their goals. We strive to deliver innovative,
                    cost-effective solutions that meet our clients' unique needs, and to build long-term relationships based on collaboration, communication, and trust. </p>
            </div>
        </div>
    </div>
)
