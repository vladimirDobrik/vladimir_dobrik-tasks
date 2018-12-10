import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { ToDoService } from '../shared/todo.service';

@Component({
    selector: 'todo-list',
    styleUrls: ['./todo-list.component.scss'],
    templateUrl: './todo-list.component.html',
})

export class ToDoListComponent implements OnInit {
    tasks: Task[];

    constructor(private todoService: ToDoService) {
        this.tasks = [];
    }

    ngOnInit() {
        this.tasks = this.todoService.getTasks();
    }

    remove(task: Task):void {
        this.todoService.removeTask(task);
    }

    toggle(task: Task):void {
        this.todoService.toggleStatusTask(task);
    }
}