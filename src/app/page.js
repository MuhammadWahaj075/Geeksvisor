// pages/index.js

import { Faq } from "@/components";
import {
  BannerSection,
  ClientExpectation,
  Consultation,
  FeatureWork,
  GetFromUs,
  GreatIdea,
  InfiniteMovingImages,
  MeetOurTeam,
  ServingIndustries,
  TestimonialsLogos,
  WhatPeopleSay,
  WhatWeDo,
  WhatWeVission,
  WhoWeAre,
} from "@/components/Home";
import { HowItWorks } from "@/components/Home/howItWorks/HowItWorks";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
      <main>
        <Header />
        <div className="gridBoxGradient">
          <BannerSection />
          {/* <TestimonialsLogos /> */}
          {/* <InfiniteMovingImages /> */}
        </div>
        <WhoWeAre />
        <ServingIndustries />
        <GetFromUs />
        <FeatureWork />
        <WhatWeDo />
        <ClientExpectation />
        <HowItWorks />
        <Consultation />
        <WhatPeopleSay />
        <WhatWeVission />
        <MeetOurTeam />
        <Faq />
        <GreatIdea />
        <Footer />
      </main>
  );
}
