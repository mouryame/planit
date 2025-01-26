import ProjectCard from "@/components/project-card";
import projectList from "@/mock/projects.json";

export default function Home() {
  return (
    <div className="flex gap-4 items-center justify-center w-screen min-h-screen">
      {projectList.map((project) => {
        return (
          <ProjectCard
            key={project.projectId}
            projectTitle={project.projectName}
            projectDesc={project.projectDesc}
            status={project.status}
            projectId={project.projectId}
          />
        );
      })}
    </div>
  );
}
