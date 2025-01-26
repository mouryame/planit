import projects from "@/mock/projects.json";

export function getProjects() {
  return projects;
}

export function getProject(projectId: string) {
  return projects.find((project) => project.projectId === projectId);
}
