import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todo-list-item',
    styles: [require('./todo-list-item.component.scss')],
    template: require('./todo-list-item.component.html'),
    encapsulation: ViewEncapsulation.None,
})

export class ToDoListItem {
    @Input() tasks: string[];

    remove(task: string):void {
        var index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }
}