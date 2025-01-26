import React from "react";
import projectsCardList from "@/mock/projects.json";
import CustomCard from "@/components/custom/CustomCard";
import taskList from "@/mock/tasks.json";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ projectId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const projectId = (await params).projectId;
  console.log(projectId);

  const selectedProject = projectsCardList.find(
    (project) => project.projectId === projectId
  );

  const selectedTask = taskList.find((tasks) => tasks.projectId === projectId);

  return (
    <div className="mt-20">
      <h1>{selectedProject?.projectName}</h1>
      <p>{selectedProject?.projectDesc}</p>
    </div>
  );
};

export default Page;
