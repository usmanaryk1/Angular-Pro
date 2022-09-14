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
        <!-- for destory auxiliary outlets pane we need some changing here in primary outlets from routerLink="folder/inbox" to [routerLink]="[{outlets:{ primary: 'folder/inbox', pane:null } }]" so pane outlet will be cleared-->
          <a 
          [routerLink]="['/mail' ,{outlets:{ primary: 'folder/inbox', pane:null } }]" 
          routerLinkActive="active"
          > Inbox </a>
          <a 
          [routerLink]="['/mail', {outlets:{ primary: 'folder/trash', pane:null } }]" 
          routerLinkActive="active"
          > Trash </a>
          <a 
          [routerLink]="['/dashboard']" 
          routerLinkActive="active"> Dashboard </a>
        </nav>

        <router-outlet></router-outlet>
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
