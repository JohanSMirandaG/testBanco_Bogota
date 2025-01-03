export interface Task {
  id: number;
  title: string;
  description: string;
}

export interface TaskResponse {
  tasks: Task[];
}
