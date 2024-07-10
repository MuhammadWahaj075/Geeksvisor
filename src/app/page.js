import { Header } from "@/components/layout/Header";
import {
  BannerSection,
  ClientExpectation,
  Faq,
  FeatureWork,
  GetFromUs,
  GreatIdea,
  HowItWorks,
  InfiniteMovingImages,
  MeetOurTeam,
  ServingIndustries,
  TestimonialsLogos,
  WhatWeDo,
  WhatWeVission,
  WhoWeAre,
} from "@/components/Home";

export default function Home() {
  return (
    <main>
      <Header />
      <BannerSection />
      <TestimonialsLogos />
      <InfiniteMovingImages />
      <WhoWeAre />
      {/* <ServingIndustries /> */}
      <GetFromUs />
      <FeatureWork />
      <WhatWeDo />
      <ClientExpectation />
      {/* <HowItWorks /> */}
      <WhatWeVission />
      <MeetOurTeam />
      <Faq />
      <GreatIdea />
    </main>
  );
}
