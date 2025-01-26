import tasks from "@/mock/tasks.json";

export function getTasks(projectId: string) {
  return tasks.filter((task) => task.projectId === projectId);
}
