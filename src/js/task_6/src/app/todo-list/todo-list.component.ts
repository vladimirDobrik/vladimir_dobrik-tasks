import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    styles: [require('./todo-list.component.scss')],
    template: require('./todo-list.component.html'),
    encapsulation: ViewEncapsulation.None,
})

export class ToDoList {
    taskDescription: string = '';
    tasks: string[] = [];

    addTask():void {
        var input = document.querySelector('input');

        if(input.value.length) {
            this.tasks.push(this.taskDescription);
            input.value = '';
        }
    }
}