export interface Task {
  id: number;
  title: string;
  description: string;
  due_date: string;
  created_at: string;
  updated_at: string;
  user_id: number;
}

export interface CreateTaskData {
  title: string;
  description: string;
  due_date: string;
}

export interface UpdateTaskData {
  title?: string;
  description?: string;
  due_date?: string;
}