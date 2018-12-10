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
    @Output() toggle = new EventEmitter();

    onToggle():void {
        this.toggle.emit(this.task);
    }

    onRemove():void {
        this.remove.emit(this.task);
    }
}