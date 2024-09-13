import { BannerSection } from "@/components/AboutUs/BannerSection";
import {  GreatIdea, MeetFounders, NumbersSpeaks, OurProven } from "@/components/Home";
import { OurMission } from "@/components/AboutUs/OurMission";
import { OurVision } from "@/components/AboutUs/OurVision";
import { WhatWeVission } from "@/components/AboutUs/whatWeVission/WhatWeVission";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";


const About = () => (
  <>
   <Header />
    <BannerSection />
    <MeetFounders />
    <OurProven />
    <OurVision />
    {/* <OurMission /> */}
    {/* <WhatWeVission /> */}
    <NumbersSpeaks />
    <GreatIdea />
    <Footer />
  </>
);

export default About;
