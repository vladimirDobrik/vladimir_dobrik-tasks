import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../todo-list/todo-list.interfaces';

@Component({
    selector: 'todo-list-item',
    styleUrls: ['./todo-list-item.component.scss'],
    templateUrl: './todo-list-item.component.html'
})

export class ToDoListItem {
    @Input() tasks: object[];

    public remove(index: number):void {
        this.tasks.splice(index, 1);
    }

    public complete(task: ITask, index: number):void {
        let removedTask = this.tasks.splice(index, 1);

        task.status = !task.status;

        if(task.status) {
            this.tasks.unshift(removedTask[0]);
        } else {
            this.tasks.push(removedTask[0]);
        }
    }
}