import {
  BannerSection,
  ClientExpectation,
  GetFromUs,
  InfiniteMovingImages,
  ServingIndustries,
  TestimonialsLogos,
  WhatWeDo,
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
      <WhatWeDo />
      <ClientExpectation />
    </main>
  );
}
