import {
  BannerSection,
  ClientExpectation,
  Faq,
  FeatureWork,
  GreatIdea,
  InfiniteMovingImages,
  MeetOurTeam,
  ServingIndustries,
  TestimonialsLogos,
  WhatPeopleSay,
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
      <FeatureWork />
      <ClientExpectation />
      <WhatPeopleSay />
      <WhatWeVission />
      <MeetOurTeam />
      <Faq />
      <GreatIdea />
    </main>
  );
}
