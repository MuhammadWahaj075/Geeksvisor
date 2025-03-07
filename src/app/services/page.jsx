import { BannerSection } from "@/components/bannerSection"
import { GreatIdea } from "@/components/greatIdea/GreatIdea"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { ReasonToChoose } from "@/components/reasonToChoose"
import { Development } from "@/components/Services/development"
import { TechnologiesWeAre } from "@/components/Services/technologiesWeAre"
import { WhoWeAre } from "@/components/Services/whoWeAre"
import { ServingIndustries } from "@/components/servingIndustries"

const Services = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1440px] mx-auto">
        <BannerSection />
        {/* <TestimonialsLogos /> */}
        <WhoWeAre />
        <ServingIndustries />
        <Development />
        <TechnologiesWeAre />
        <ReasonToChoose />
        <GreatIdea />
      </div>
      <Footer />
    </>
  )
}

export default Services
