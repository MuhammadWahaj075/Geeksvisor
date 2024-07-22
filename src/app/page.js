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
      <Header />
      <BannerSection />
      <TestimonialsLogos />
      <InfiniteMovingImages />
      <WhoWeAre />
      <ServingIndustries />
    </main>
  );
}
