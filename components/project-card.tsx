import React from "react";
import CustomCard from "./custom/CustomCard";
import { Button } from "./ui/button";
import Link from "next/link";

interface ProjectCardProps {
  projectTitle?: string;
  projectDesc?: string;
  status: React.ReactNode;
  projectId: string;
}

const ProjectCard = ({
  projectTitle,
  projectDesc,
  status,
  projectId,
}: ProjectCardProps) => {
  return (
    <Link href={`project/${projectId}`}>
      <CustomCard
        title={projectTitle}
        description={projectDesc}
        className="w-80 "
      >
        <p>{status}</p>
        <Button>Delete</Button>
      </CustomCard>
    </Link>
  );
};

export default ProjectCard;
