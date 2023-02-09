export interface Task {
  taskTitle: string;
  taskDescription?: string;
  taskStartTime: number;
  taskEndTime?: number;
  alreadyDone: boolean;
}
