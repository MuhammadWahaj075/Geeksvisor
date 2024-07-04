import {
  BannerSection,
  GetFromUs,
  InfiniteMovingImages,
  ServingIndustries,
  TestimonialsLogos,
  WhoWeAre,
} from "@/components/Home";
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
    </main>
  );
}
