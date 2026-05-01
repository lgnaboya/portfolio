import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";

import CaseStudyTemplate from "@/case-study/CaseStudyTemplate";
import PaloTemplate from "@/case-study/PaloTemplate";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-white p-10 text-center">
        Project not found
      </div>
    );
  }

  // Template switching
  switch (project.template) {
    case "palo":
      return <PaloTemplate data={project} />;

    default:
      return <CaseStudyTemplate data={project} />;
  }
}
