import { GreatIdea } from "@/components/Home";
import { DetailSection } from "@/components/ProjectDetail/detailSection";
import { ProjectDetailBanner } from "@/components/ProjectDetail/projectDetailBanner";
import { ProjectTimeline } from "@/components/ProjectDetail/projectTimeline";
import { SeeProjects } from "@/components/ProjectDetail/seeMoreProjects";
import { TechnologiesUsed } from "@/components/ProjectDetail/technology";
import { clientFeedback, ProblemStatement, Solution } from "@/utils/mockData";

const ProjectDetail = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <ProjectDetailBanner />
      <DetailSection
        title={ProblemStatement.title}
        description={ProblemStatement.description}
      />
      <DetailSection
        title={Solution.title}
        description={Solution.description}
      />
      <TechnologiesUsed />
      <ProjectTimeline title={"Project TImeline"} />
      <ProjectTimeline title={"Wireframes"} />
      <ProjectTimeline title={"Styleguide"} />
      <ProjectTimeline title={"Mockups"} />
      <DetailSection
        title={clientFeedback.title}
        description={clientFeedback.description}
      />
      <SeeProjects />
      <GreatIdea />
    </div>
  );
};

export default ProjectDetail;
