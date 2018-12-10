import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss']
})

export class ToDoFormComponent {
    description: string = '';
    @Output() add = new EventEmitter();

    onSubmit():void {
        this.add.emit(this.description);
    }
}