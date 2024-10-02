import { BannerSection } from "@/components/AboutUs/BannerSection";
import { GreatIdea } from "@/components/greatIdea/GreatIdea";
// import { TestimonialsLogos } from "@/components/Home";
import { NumbersSpeak } from "@/components/numbersSpeak";
import { OurProven } from "@/components/ourProven";
import { ReasonToChoose } from "@/components/reasonToChoose";
import Experience from "@/components/TeamMember/Experience";

const TeamMember = () => {
  return (
    <div>
      <BannerSection />
      <div className="mt-40">
        {/* <TestimonialsLogos /> */}
      </div>
      <Experience />
      <NumbersSpeak />
      <OurProven />
      <ReasonToChoose />
      <GreatIdea />
    </div>
  );
};

export default TeamMember;
