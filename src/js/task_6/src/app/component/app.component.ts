import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'custom-app',
    template: require('./app.component.html'),
    styles: [ require('./app.component.scss') ],
    encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
}