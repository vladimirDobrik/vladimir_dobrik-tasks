import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { AppComponent }     from './component/app.component';
import { ToDoList }         from './todo-list/todo-list.component';
import { ToDoListItem }     from './todo-list-item/todo-list-item.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [
        AppComponent,
        ToDoList,
        ToDoListItem,
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}