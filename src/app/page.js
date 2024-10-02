// pages/index.js

import { Faq } from "@/components";
import {
  Consultation,
  ModernTech,
  OurProven,
  ServingIndustries,
  YouCanGet,
} from "@/components/Home";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OurCoreValue } from "@/components/OurCore";
import { OurStrength } from "@/components/OurStrength";
import { NumbersSpeak } from "@/components/numbersSpeak";
import { GreatIdea } from "@/components/greatIdea/GreatIdea";
import { BannerSection } from "@/components/bannerSection";
import { OurProcess } from "@/components/Home/ourProcess";
import { MeetFounders } from "@/components/meetFounders";
import { ReasonToChoose } from "@/components/reasonToChoose";


export default function Home() {
  return (
      <main>
        <Header />
        <div className="gridBoxGradient">
          <BannerSection />
          {/* <TestimonialsLogos /> */}
        </div>
        <OurCoreValue />
        {/* <WhoWeAre /> */}
        <OurStrength />
        <ModernTech />
        <OurProven />
        <ServingIndustries />
        <NumbersSpeak />
        <ReasonToChoose />
        <OurProcess />
        <YouCanGet />
        <Consultation />
        <MeetFounders />
        <Faq />
        <GreatIdea />
        <Footer />
      </main>
  );
}
