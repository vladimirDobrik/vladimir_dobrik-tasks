import { Component } from '@angular/core';
import { ITask } from './todo-list.interfaces';

@Component({
    selector: 'todo-list',
    styleUrls: ['./todo-list.component.scss'],
    templateUrl: './todo-list.component.html',
})

export class ToDoList {
    tasks: ITask[] = [
        {
            "description": "Купить хлеб",
            "status": false
        },
        {
            "description": "Купить молоко",
            "status": false
        },
        {
            "description": "Купить сахар",
            "status": false
        },
        {
            "description": "Вымыть посуду",
            "status": false
        },
        {
            "description": "Убраться в доме",
            "status": false
        }
    ];

    addTask(input: HTMLInputElement):void {
        if(input.value.length) {
            this.tasks.push({
                "description": input.value,
                "status": false
            });

            input.value = '';
        }
    }
}