import { BannerSection } from "@/components/AboutUs/BannerSection";
import {  GreatIdea, NumbersSpeaks, OurProven, ReasonToChoose, TestimonialsLogos } from "@/components/Home";
import Experience from "@/components/TeamMember/Experience";

const TeamMember = () => {
  return (
    <div>
      <BannerSection />
      <div className="mt-40">
        <TestimonialsLogos />
      </div>
      <Experience />
      <NumbersSpeaks />
      <OurProven />
      <ReasonToChoose />
      <GreatIdea />
    </div>
  );
};

export default TeamMember;
