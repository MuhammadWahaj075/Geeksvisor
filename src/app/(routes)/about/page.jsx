import { BannerSection } from "@/components/AboutUs/BannerSection";
import { MeetOurTeam } from "@/components/AboutUs/MeetOurTeam";
import { ClientExpectation, GreatIdea } from "@/components/Home";
import { OurMission } from "@/components/AboutUs/OurMission";
import { OurVision } from "@/components/AboutUs/OurVision";
import { WhatWeVission } from "@/components/AboutUs/whatWeVission/WhatWeVission";


const About = () => (
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

export default About;
