import { ClientExpectation, GreatIdea, WhatWeVission } from "@/components/Home";
import { BannerSection } from "@/components/Home/aboutUsSections/BannerSection";
import { MeetOurTeam } from "@/components/Home/aboutUsSections/MeetOurTeam";
import { OurMission } from "@/components/Home/aboutUsSections/OurMission";
import { OurVision } from "@/components/Home/aboutUsSections/OurVision";

const About = () => {
  return (
    <>
      <BannerSection />
      <MeetOurTeam />
      <OurVision />
      <OurMission />
      <WhatWeVission />
      <ClientExpectation />
      <GreatIdea />
    </>
  );
};

export default About;
