import { Header } from "@/components/layout/Header";
import {
  BannerSection,
  FeatureWork,
  GetFromUs,
  InfiniteMovingImages,
  ServingIndustries,
  TestimonialsLogos,
  WhatWeDo,
  WhoWeAre,
} from "@/components/Home";

export default function Home() {
  return (
    <main className="!bg-black">
      <Header />
      <BannerSection />
      <TestimonialsLogos />
      <InfiniteMovingImages />
      <WhoWeAre />
      {/* <ServingIndustries /> */}
      <GetFromUs />
      <FeatureWork />
      <WhatWeDo />
    </main>
  );
}
