import { Component } from "@angular/core";
import { ToDoService } from "../shared/todo.service";

@Component({
    selector: 'todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss']
})

export class ToDoFormComponent {
    description: string = '';

    constructor(private todoService: ToDoService){}

    onSubmit():void {
        this.todoService.addTask(this.description);
    }
}