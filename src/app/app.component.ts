import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
  <div class="app">
    <header>
      <img src="../assets/logo.svg">
    </header>
    <div class="app__content">
      <nav>
        <a
          routerLink="folder/inbox"
          routerLinkActive="active">
          Inbox
        </a>
        <a
          routerLink="folder/trash"
          routerLinkActive="active">
          Trash
        </a>
        <a>
          {{title}}
        </a>
      </nav>

      <mail-app></mail-app>

    </div>
  </div>
  `
})
export class AppComponent implements OnInit {
  title = 'Routing setup start from here see in console';
  constructor(private router: Router) {}
  ngOnInit() {}
}
