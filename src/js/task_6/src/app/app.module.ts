import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './component/app.component';
import { ToDoFormComponent } from './todo-form/todo-form.component';
import { ToDoListComponent } from './todo-list/todo-list.component';
import { ToDoListItemComponent } from './todo-list-item/todo-list-item.component';
import { ToDoService } from './shared/todo.service';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [
        AppComponent,
        ToDoFormComponent,
        ToDoListComponent,
        ToDoListItemComponent
    ],
    providers: [ ToDoService ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}