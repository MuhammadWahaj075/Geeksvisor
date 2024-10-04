// pages/index.js

import { Faq } from "@/components";
import {
  Consultation,
  MeetFounders,
  ModernTech,
  OurProcess,
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
import { OurProven } from "@/components/ourProven";


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
