import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app">
      <header>
        <img src="../assets/logo.svg" />
      </header>
      <div class="app__content">
        <nav>
          <a routerLink="folder/inbox" routerLinkActive="active"> Inbox </a>
          <a routerLink="folder/trash" routerLinkActive="active"> Trash </a>
        </nav>

        <mail-app></mail-app>
      </div>
    </div>
  `,
})
export class AppComponent implements OnInit {
  title = 'Routing setup start from here see in console';
  constructor(private router: Router) {
    // this.router.events
    //   .pipe(
    //   filter((event) => event instanceof NavigationEnd),// filter by navigationEnd then only that navigationEnd event triger
    //   // tap(event=> console.log("see only navigationEnd event will filtered" , event))
    //   ).subscribe(events=>console.log("only navigationEnd fired",events))//whenever the router change event triger
    
  }
  ngOnInit() {}
}
