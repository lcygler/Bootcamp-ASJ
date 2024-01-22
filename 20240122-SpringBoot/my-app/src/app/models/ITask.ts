export interface Task {
  id?: number;
  description: string;
  date: Date;
  done: boolean;
  deleted: boolean;
}
