import { Injectable } from '@angular/core';
import { Task } from "./task";
import { tasks } from "./data";

@Injectable()

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
        let index = this.tasks.indexOf(task);
        let completedTask = this.tasks.splice(index, 1);
        
        task.status = !task.status;

        let isCompleted = task.status;

        if(isCompleted) {
            this.tasks.unshift(completedTask[0]);
        } else {
            this.tasks.push(completedTask[0]);
        }
    }
}