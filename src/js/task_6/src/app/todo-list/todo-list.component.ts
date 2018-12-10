import { Component, Input, OnInit } from '@angular/core';
import { Task }  from '../shared/task';
import { ToDoService } from '../shared/todo.service';
@Component({
    selector: 'todo-list',
    styleUrls: ['./todo-list.component.scss'],
    templateUrl: './todo-list.component.html',
})

export class ToDoListComponent {
    @Input() tasks: Task[];

    constructor(private todoService: ToDoService) {
        this.tasks = [];
    }

    ngOnInit() {
        this.tasks = this.todoService.getTasks();
    }

    remove(task: Task):void {
        let index = this.tasks.indexOf(task);

        if(index > -1) {
            this.tasks.splice(index, 1);
        }
    }
}