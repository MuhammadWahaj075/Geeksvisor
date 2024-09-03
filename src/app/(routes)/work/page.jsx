import { BannerSection } from "@/components/bannerSection/BannerSection";
import { WhatPeopleSay } from "@/components/reasonToChoose/ReasonToChoose";
import { Pills } from "@/components/Work/workPills";
import { WorkProjects } from "@/components/Work/workProjects/workProjects";

const WorkPage = () => {
  return (
    <div className="gridBoxGradient">
      <BannerSection />
      <Pills />
      <WorkProjects />
      <WhatPeopleSay />
    </div>
  );
};

export default WorkPage;
