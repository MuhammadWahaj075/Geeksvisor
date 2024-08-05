import { BannerSection } from "@/components/AboutUs/BannerSection";
import { ClientExpectation } from "@/components/AboutUs/clientExpect/ClientExpect";
import {
  FeatureWork,
  GreatIdea,
  TestimonialsLogos,
  WhatPeopleSay,
} from "@/components/Home";
import Experience from "@/components/TeamMember/Experience";
import React from "react";

const TeamMembers = () => {
  return (
    <div>
      <BannerSection />
      <div className="mt-40">
        <TestimonialsLogos />
      </div>
      <Experience />
      <ClientExpectation />
      <FeatureWork />
      <WhatPeopleSay />
      <GreatIdea />
    </div>
  );
};

export default TeamMembers;
