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
  WhatPeopleSay,
  WhatWeDo,
  WhatWeVission,
  WhoWeAre,
} from "@/components/Home";

export default function Home() {
  return (
    <main>
      <BannerSection />
      <TestimonialsLogos />
      <InfiniteMovingImages />
      <WhoWeAre />
      <ServingIndustries />
      <GetFromUs />
      <FeatureWork />
      <WhatWeDo />
      <ClientExpectation />
      <HowItWorks />
      <WhatPeopleSay />
      <WhatWeVission />
      <MeetOurTeam />
      <Faq />
      <GreatIdea />
    </main>
  );
}
