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

export default function Home() {
  return (
    <main>
      <div className="gridBoxGradient">
        <BannerSection />
        <TestimonialsLogos />
        <InfiniteMovingImages />
      </div>
      <WhoWeAre />
      <ServingIndustries />
      <GetFromUs />
      <FeatureWork />
      <WhatWeDo />
      <ClientExpectation />
      <Consultation />
      <HowItWorks />
      <Consultation />
      <WhatPeopleSay />
      <WhatWeVission />
      <MeetOurTeam />
      <Faq />
      <GreatIdea />
    </main>
  );
}
