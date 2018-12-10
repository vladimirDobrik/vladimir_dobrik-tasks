import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../shared/task';

@Component({
    selector: 'todo-list-item',
    styleUrls: ['./todo-list-item.component.scss'],
    templateUrl: './todo-list-item.component.html'
})

export class ToDoListItemComponent {
    @Input() task: Task;
    @Output() remove = new EventEmitter();

    toggleStatus():void {
        this.task.status = !this.task.status;
    }

    onRemove():void {
        this.remove.emit(this.task);
    }
}