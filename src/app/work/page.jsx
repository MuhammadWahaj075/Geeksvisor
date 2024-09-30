import { BannerSection } from "@/components/bannerSection/BannerSection";
import { ReasonToChoose } from "@/components/reasonToChoose";
import { Pills } from "@/components/Work/workPills";
import { WorkProjects } from "@/components/Work/workProjects/workProjects";

const WorkPage = () => {
  return (
    <div className="gridBoxGradient">
      <BannerSection />
      <Pills />
      <WorkProjects />
      <ReasonToChoose />
    </div>
  );
};

export default WorkPage;
