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
      <div className="inner-div">
      <BannerSection />
      <TestimonialsLogos />
      <InfiniteMovingImages />
      </div>
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
