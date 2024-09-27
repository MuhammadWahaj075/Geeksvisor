// pages/index.js

import { Faq } from "@/components";
import {
  BannerSection,
  Consultation,
  GreatIdea,
  MeetFounders,
  ModernTech,
  NumbersSpeaks,
  OurProcess,
  OurProven,
  ReasonToChoose,
  ServingIndustries,
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
        </div>
        <OurCoreValue />
        {/* <WhoWeAre /> */}
        <OurStrength />
        <ModernTech />
        <OurProven />
        <ServingIndustries />
        <NumbersSpeaks />
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
