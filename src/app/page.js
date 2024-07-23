import {
  BannerSection,
  GetFromUs,
  InfiniteMovingImages,
  ServingIndustries,
  TestimonialsLogos,
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
    </main>
  );
}
