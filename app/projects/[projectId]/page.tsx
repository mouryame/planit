import TasksBoard from "@/components/TasksBoard";
import { Button } from "@/components/ui/button";
import { getProject } from "@/services/projects";
import Link from "next/link";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export default async function Page({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const projectId = (await params).projectId;
  const project = getProject(projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        <Link
          href="/"
          className="w-8 h-8 hover:bg-gray-100 flex justify-center items-center rounded-full"
        >
          <IoChevronBackCircleOutline className="w-8 h-8" />
        </Link>
        <h1 className="text-4xl font-bold">{project.projectName}</h1>
        <p>{project.projectDesc}</p>
      </div>
      <TasksBoard projectId={projectId} />
    </div>
  );
}
