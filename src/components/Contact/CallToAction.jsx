import { contact } from "@/utils/mockData";

const ContactInfo = ({ className, title, description }) => (
  <div className={className}>
    <h1 className="info_title text-[#525252]">{title}</h1>
    <h2 className="info_description mt-[8px]">{description}</h2>
  </div>
);

const { contactInfo } = contact;

export const CallToAction = () => (
  <div className="flex justify-center mt-[75px]">
    <div className="flex flex-wrap xl:gap-[180px] md:gap-[100px] sm:gap-[56px] gap-[24px] h-[auto] xl:w-[1159px] w-[100%] mx-[24px] xl:h-[631px]">
      <div className="lg:w-[498px] w-[100%]">
        <h1 className="title_text !text-left">{contactInfo.mainTitle}</h1>
        <p className="description_text mt-[24px]">{contactInfo.message}.</p>
        <div className="mt-[63px] lg:w-[498px] md:w-[100%] h-[472px] rounded-[13px] bg-ruinedSmores" />
      </div>
      <div className="flex flex-col md:w-[370px] w-[100%] sm:py-[32px]">
        <ContactInfo title="EMAIL" description={contactInfo.email} />
        <ContactInfo
          className="mt-[24px] sm:mt-[106.5px]"
          title="PHONE"
          description={contactInfo.phone}
        />
        <ContactInfo
          className="mt-[24px] sm:mt-[106.5px]"
          title="LOCATION"
          description={contactInfo.location}
        />
      </div>
    </div>
  </div>
);
