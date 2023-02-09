export interface Task {
  _id?: string;
  taskTitle: string;
  taskDescription?: string;
  taskStartTime: number;
  taskEndTime?: number;
  alreadyDone?: boolean;
}
