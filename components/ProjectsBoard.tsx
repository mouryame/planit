import { getProjects } from "@/services/projects";
import CustomCard from "./custom/CustomCard";
import Link from "next/link";
import CreateCard from "./CreateCard";

export default async function ProjectsBoard() {
  const projects = getProjects();
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        {projects.map((project) => (
          <ProjectCard key={project.projectId} project={project}></ProjectCard>
        ))}
        <CreateCard type="project" />
      </div>
    </div>
  );
}

function ProjectCard({ project }: ProjectCardProps) {
  const { projectId, projectName, projectDesc } = project;
  return (
    <Link href={`/projects/${projectId}`}>
      <CustomCard title={projectName} description={projectDesc}>
        Something
      </CustomCard>
    </Link>
  );
}
