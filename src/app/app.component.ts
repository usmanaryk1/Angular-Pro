import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
  This is {{title}}.
  `
})
export class AppComponent {
  title = 'AngularPro';
}
