interface TabData {
  [key: string]: React.ReactNode;
}

interface CustomTabProps {
  tabs: TabData;
}

interface Project {
  projectId: string;
  projectName: string;
  projectDesc: string;
  status: string;
  progress: number;
  createdBy: string;
  createdAt: string;
}

interface ProjectCardProps {
  project: Project;
}

interface Task {
  taskID: string;
  taskTitle: string;
  taskDescription: string;
  status: string;
  takenUpBy: string;
  projectId: string;
  createdBy: string;
  createdAt: string;
  changedBy: string;
  changedAt: string;
  deletedBy: string;
  deletedAt: string;
  approvedBy: string;
  approvedAt: string;
}

interface TaskCardProps {
  task: Task;
}
