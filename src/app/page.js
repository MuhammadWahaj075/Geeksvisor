import { Header } from "@/components/layout/Header";
import {
  BannerSection,
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
    </main>
  );
}
