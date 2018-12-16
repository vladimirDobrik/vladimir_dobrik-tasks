import { Injectable } from '@angular/core';
import { Task } from "./task";
import { tasks } from "./data";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable()

export class ToDoService {
    tasks: Task[] = tasks;

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(description: string):void {
        this.tasks.push(new Task(description));
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

        let indexOfFirstNotCompleted = this.tasks.findIndex(item => item.status === false);

        if(indexOfFirstNotCompleted === -1) {
            indexOfFirstNotCompleted = this.tasks.length;
        }

        this.tasks.splice(indexOfFirstNotCompleted, 0, completedTask[0]);
    }

    moveTask(event: CdkDragDrop<Task[]>):void {
        moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    }
}