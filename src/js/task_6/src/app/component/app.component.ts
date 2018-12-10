import { Component } from '@angular/core';
import { Task } from '../shared/task';
import { tasks } from '../shared/data';

@Component({
    selector: 'custom-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
})

export class AppComponent {
    tasks: Task[] = tasks;

    addTask(description: string):void {
        const task = new Task(description);

        this.tasks.push(task);
    }
}