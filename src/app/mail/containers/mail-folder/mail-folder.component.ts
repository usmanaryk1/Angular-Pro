import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
  <!-- dynamic title fetch from router params weather inbox or trash -->
  <h2>{{ title$ | async }}</h2>
  <!-- dynamic message fetch either property value inbox or trash one t a time by routing change /folder/inbox or /folder/trash-->
  <mail-item
    *ngFor="let message of (messages$ | async)"
    [message]="message">
  </mail-item>
  `
})
export class MailFolderComponent {
  //get resolver data which is called from route path resolve in mail.module.ts where mail-folder.resolver.ts is given as resolver and that resolver call service to fetch data dynamically according to route like folder/inbox or folder/trash route change via click nav link  
  messages$: Observable<Mail[]> = this.route.data.pipe(map(x=> x.messages));//in the route.data there will be message property which is given in resolve { messages:MailFolderResolver} fetch that // pluck('messages') is depricated
  title$: Observable<string> = this.route.params.pipe(map(x=> x.name));
  constructor(private route: ActivatedRoute) {}
}
