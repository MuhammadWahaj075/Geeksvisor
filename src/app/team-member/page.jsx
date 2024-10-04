import { BannerSection } from "@/components/bannerSection";
import { GreatIdea } from "@/components/greatIdea/GreatIdea";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { NumbersSpeak } from "@/components/numbersSpeak";
import { OurProven } from "@/components/ourProven";
import { ReasonToChoose } from "@/components/reasonToChoose";
import Experience from "@/components/TeamMember/Experience";

const TeamMember = () => {
  return (
    <div>
      <Header />
      <BannerSection />
      <div className="mt-40">
        {/* <TestimonialsLogos /> */}
      </div>
      <Experience />
      <NumbersSpeak />
      <OurProven />
      <ReasonToChoose />
      <GreatIdea />
      <Footer />
    </div>
  );
};

export default TeamMember;
