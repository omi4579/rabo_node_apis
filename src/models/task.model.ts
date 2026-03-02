export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
}

// In-memory storage
export const tasks: Task[] = [];
