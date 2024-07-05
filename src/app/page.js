import {
  BannerSection,
  GetFromUs,
  InfiniteMovingImages,
  ServingIndustries,
  TestimonialsLogos,
  WhoWeAre,
} from "@/components/Home";
import { FeatureWork } from "@/components/Home/FeatureWork";
import { Header } from "@/components/layout/Header";

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

    </main>
  );
}
