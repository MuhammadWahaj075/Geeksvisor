// pages/index.js

import { Faq } from "@/components";
import {
  BannerSection,
  Consultation,
  GetFromUs,
  GreatIdea,
  MeetOurTeam,
  NumbersSpeaks,
  OurProcess,
  OurProven,
  ReasonToChoose,
  ServingIndustries,
  WhatWeVission,
  YouCanGet,
} from "@/components/Home";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OurCoreValue } from "@/components/OurCore";
import { OurStrength } from "@/components/OurStrength";


export default function Home() {
  return (
      <main>
        <Header />
        <div className="gridBoxGradient">
          <BannerSection />
          {/* <TestimonialsLogos /> */}
          {/* <InfiniteMovingImages /> */}
        </div>
        <OurCoreValue />
        {/* <WhoWeAre /> */}
        <OurStrength />
        <GetFromUs />
        <OurProven />
        <ServingIndustries />
        <NumbersSpeaks />
        <ReasonToChoose />
        <OurProcess />
        <YouCanGet />
        <Consultation />
        <MeetOurTeam />
        {/* <WhatWeVission /> */}
        <Faq />
        <GreatIdea />
        <Footer />
      </main>
  );
}
