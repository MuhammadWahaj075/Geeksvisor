import { BannerSection, WhatPeopleSay } from "@/components/Home";
import { Pills } from "@/components/Work/pills/Pills";
import { WorkProjects } from "@/components/Work/projects";


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
