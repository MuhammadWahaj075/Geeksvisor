import { BannerSection } from "@/components/AboutUs/BannerSection";
import { OurVision } from "@/components/AboutUs/OurVision";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NumbersSpeak } from "@/components/numbersSpeak";
import { MeetFounders } from "@/components/meetFounders";
import { GreatIdea } from "@/components/greatIdea/GreatIdea";
import { OurProven } from "@/components/ourProven";


const About = () => (
  <>
   <Header />
    <BannerSection />
    <OurVision />
    <MeetFounders />
    <OurProven />
    {/* <OurMission /> */}
    {/* <WhatWeVission /> */}
    <NumbersSpeak />
    <GreatIdea />
    <Footer />
  </>
);

export default About;
