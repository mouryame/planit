import { getTasks } from "@/services/tasks";
import CustomCard from "./custom/CustomCard";
import CreateCard from "./CreateCard";
import AnimatedModal from "./custom/AnimatedModal";

export default function TasksBoard({ projectId }: { projectId: string }) {
  const tasks = getTasks(projectId);
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {tasks.map((task) => (
        <AnimatedModal
          key={task.taskID + projectId}
          trigger={<TaskCard key={task.taskID + projectId} task={task} />}
        >
          <h1 className="text-4xl font-bold">{task.taskTitle}</h1>
          <p>{task.taskDescription}</p>
        </AnimatedModal>
      ))}
      <CreateCard type="task" />
    </div>
  );
}

function TaskCard({ task }: { task: Task }) {
  return (
    <CustomCard
      title={task.taskTitle}
      description={task.taskDescription}
      className="text-left w-full h-full"
    >
      Something
    </CustomCard>
  );
}
