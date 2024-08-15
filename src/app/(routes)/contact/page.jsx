import { Faq } from "@/components";
import GridBoxAnimation from "@/components/ui/GridBoxAnimation";
import { CallToAction, ContactForm } from "@/components/Contact";

const ContactUs = () => (
  <>
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center">
      <GridBoxAnimation />
    </div>
    <div className="relative z-10">
      <ContactForm />
      <CallToAction />
      <Faq />
    </div>
  </>
);

export default ContactUs;
