import { Task } from "./task";
import { tasks } from "./data";

export class ToDoService {
    tasks: Task[] = tasks;

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(description: string):void {
        let newTask = new Task(description);

        this.tasks.push(newTask);
    }

    removeTask(task: Task):void {
        let index = this.tasks.indexOf(task);

        if(index > -1) {
            this.tasks.splice(index, 1);
        }
    }

    toggleStatusTask(task: Task):void {
        task.status = !task.status;
    }
}