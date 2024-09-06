import { BannerSection } from "@/components/AboutUs/BannerSection";
import {  GreatIdea, MeetOurTeam, NumbersSpeaks } from "@/components/Home";
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
    <NumbersSpeaks />
    <GreatIdea />
  </>
);

export default About;
