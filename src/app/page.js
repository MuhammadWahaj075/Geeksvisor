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
      <FeatureWork />
      <WhatWeDo />
      <ClientExpectation />
      <WhatPeopleSay />
      <WhatWeVission />
      <MeetOurTeam />
      <Faq />
      <GreatIdea />
    </main>
  );
}
