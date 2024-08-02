import { Button, TextArea } from "../comman";
import { Input } from "../comman/Input";

export const ContactForm = () => (
  <div className="flex  justify-center bg-red">
    <div className="flex flex-wrap justify-between bg-[#101010] w-[1159px] h-[755px] rounded-[13px] px-[40px] py-[58px]">
      <div className="w-[405px]">
        <h1 className="title_text !text-primary-normal max-w-[737px]">
          Let’s work together!
        </h1>
        <p className="description_text mt-[24px]">
          Let’s get you scheduled on a 1 to 1 free call to learn more about your
          idea and see if we are a good fit, Cheers!
        </p>
      </div>
      <div className="w-[568px] flex flex-col">
        <Input
          label="Email"
          className="!bg-[#1A1A1A] mt-[8px] md:!w-[568px] w-full"
          placeholder="Enter here"
        />
        <Input
          label="Subject"
          className="!bg-[#1A1A1A] mt-[8px] md:!w-[568px] w-full"
          placeholder="Enter here"
        />
        <Input
          label="Budget"
          className="!bg-[#1A1A1A] mt-[8px] md:!w-[568px] w-full"
          placeholder="Enter here"
        />
        <TextArea
          label="Message"
          rows={6}
          className="!bg-[#1A1A1A] mt-[8px] md:!w-[568px] w-full"
          placeholder="Enter here"
        />
        <Button className="mt-[18px]">Submit</Button>
      </div>
    </div>
  </div>
);
