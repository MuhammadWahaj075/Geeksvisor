import { BannerSection } from "@/components/AboutUs/BannerSection";
import { ClientExpectation } from "@/components/AboutUs/clientExpect/ClientExpect";
import { MeetOurTeam } from "@/components/AboutUs/MeetOurTeam";
import { OurMission } from "@/components/AboutUs/OurMission";
import { OurVision } from "@/components/AboutUs/OurVision";
import { WhatWeVission } from "@/components/AboutUs/whatWeVission/WhatWeVission";
import { GreatIdea } from "@/components/Home";


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
