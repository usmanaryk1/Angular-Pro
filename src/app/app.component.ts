import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
  This is {{title}}.
  `
})
export class AppComponent {
  title = 'Reactive Form Start From Here';
}
