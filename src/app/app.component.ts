import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
  <stock-inventory></stock-inventory>
  `
})
export class AppComponent {
  title = 'Reactive Form Start From Here';
}
