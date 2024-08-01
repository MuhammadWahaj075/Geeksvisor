import { Button } from '../comman'
import { Input } from '../comman/Input'

export const ContactForm = () => (
    <div className='flex justify-center bg-red'>
        <div className='flex justify-between  w-[1159px] h-[755px] rounded-[13px] px-[40px] py-[58px]'>
            <div className='w-[405px]'>
                <h1 className="title_text !text-primary-normal max-w-[737px]">
                    Let’s work together!
                </h1>
                <p className="description_text mt-[24px]">
                    Let’s get you scheduled on a 1 to 1  free call to learn more about your idea and see if we are a good fit, Cheers!
                </p>
            </div>
            <div className='w-[568px] flex flex-col'>
                <Input placeholder="Enter here" />
                <Input placeholder="Enter here" />
                <Input placeholder="Enter here" />
                <Input placeholder="Enter here" />
                <Button className="mt-[18px]">Submit</Button>
            </div>
        </div>
    </div>
)
