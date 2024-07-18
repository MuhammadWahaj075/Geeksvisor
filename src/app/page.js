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
  WhatPeopleSay,
  WhatWeDo,
  WhatWeVission,
  WhoWeAre,
} from "@/components/Home";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <BannerSection />
      <TestimonialsLogos />
      <InfiniteMovingImages />
      <WhoWeAre />
      <ServingIndustries />
      <GetFromUs />
      <FeatureWork />
      {/* <WhatWeDo /> */}
      <ClientExpectation />
      <HowItWorks />
      {/* <WhatPeopleSay /> */}
      <WhatWeVission />
      <MeetOurTeam />
      <Faq />
      <GreatIdea />
      <Footer />
    </main>
  );
}
