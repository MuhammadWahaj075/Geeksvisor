import { BannerSection } from "@/components/AboutUs/BannerSection";
import { ClientExpectation, FeatureWork, GreatIdea, TestimonialsLogos } from "@/components/Home";
import Experience from "@/components/TeamMember/Experience";
import { WhatPeopleSay } from "@/components/reasonToChoose/ReasonToChoose";

const TeamMember = () => {
  return (
    <div>
      <BannerSection />
      <div className="mt-40">
        <TestimonialsLogos />
      </div>
      <Experience />
      <ClientExpectation />
      <FeatureWork />
      <WhatPeopleSay />
      <GreatIdea />
    </div>
  );
};

export default TeamMember;
