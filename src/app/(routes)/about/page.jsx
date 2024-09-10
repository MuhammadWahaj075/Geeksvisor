import { BannerSection } from "@/components/AboutUs/BannerSection";
import {  GreatIdea, MeetFounders, NumbersSpeaks } from "@/components/Home";
import { OurMission } from "@/components/AboutUs/OurMission";
import { OurVision } from "@/components/AboutUs/OurVision";
import { WhatWeVission } from "@/components/AboutUs/whatWeVission/WhatWeVission";


const About = () => (
  <>
    <BannerSection />
    <MeetFounders />
    <OurVision />
    <OurMission />
    <WhatWeVission />
    <NumbersSpeaks />
    <GreatIdea />
  </>
);

export default About;
