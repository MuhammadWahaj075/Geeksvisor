import {  GreatIdea } from "@/components/Home";
import { BannerSection } from "@/pages/aboutUsSections/BannerSection";
import { ClientExpectation } from "@/pages/aboutUsSections/clientExpect/ClientExpect";
import { MeetOurTeam } from "@/pages/aboutUsSections/MeetOurTeam";
import { OurMission } from "@/pages/aboutUsSections/OurMission";
import { OurVision } from "@/pages/aboutUsSections/OurVision";
import { WhatWeVission } from "@/pages/aboutUsSections/whatWeVission/WhatWeVission";

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
