import { Task } from "./task";
import { tasks } from "./data";

export class ToDoService {
    tasks: Task[] = tasks;

    getTasks(): Task[] {
        return this.tasks;
    }
}