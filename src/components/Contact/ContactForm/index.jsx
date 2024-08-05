import { contact } from "@/utils/mockData";
import { Button, TextArea } from "../../comman";
import { Input } from "../../comman/Input/Input";

// input
const inputClass = "!bg-eerieBlack mt-[8px] sm:h-[66px] h-[50px] lg:w-[568px] md:w-full";

export const ContactForm = () => (
  <div className="flex justify-center mt-[50px]">
    <div className="flex flex-wrap justify-between bg-chaosBlack xl:w-[1159px] md:w-[95%] w-[95%] xl:h-[755px] h-auto rounded-[13px] md:px-[40px] md:py-[58px] py-[16px] px-[16px] ">
      <div className="xl:w-[405px] md:text-left text-center">
        <h1 className="title_text !text-primary-normal max-w-[737px]  md:text-left text-center">
          {contact.title}
        </h1>
        <p className="description_text mt-[24px]">{contact.description}</p>
      </div>
      <div className="lg:w-[568px] md-w-[100%] w-[100%] xl:mt-[-18px] md:mt-[0px] flex flex-col">
        <Input label="Email" className={inputClass} placeholder="Enter here" />
        <Input
          label="Subject"
          className={inputClass}
          placeholder="Enter here"
        />
        <Input
          label="Budget"
          className={inputClass}
          placeholder="Select here"
        />
        <TextArea
          label="Message"
          rows={6}
          className={"!bg-eerieBlack mt-[8px] lg:w-[568px] md:w-full"}
          placeholder="Enter here"
        />
        <Button className="mt-[18px]">Submit</Button>
      </div>
    </div>
  </div>
);
