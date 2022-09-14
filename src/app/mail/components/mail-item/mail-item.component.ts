import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  template: `
  <!-- Example of auxiliary router-outlet name='pane' ==> [routerLink] communicate to outlets(pane) and pass in argument(['message', message.id]) to navigate to our message -->
  <!-- http://localhost:4200/folder/inbox(pane:message/1)" , folder/inbox=>'' , (pane:=> {outlets:{ pane: }}, message/1=>['message', message.id]  -->
  <!-- [routerLink]="['', this is the first value like folder/inbox ]" -->
  <!-- [routerLink]="['', { outlets:{ pane: 2nd value is oject (in multi outlets case) tell which router to navigate ]" -->
  <!-- [routerLink]="['', { outlets:{ pane: ['message', message.id] 3rd argument of the pane is the path to navigate  ]" -->
  <!-- routerLinkActive="active" for styling purpose in scss left border slightly purpul -->
  
  <!--alternate way also through js api router.navigate() instead of [routerLink]="" but routerLinkActive will not work--> 
  <!-- Back to routerLink so routerLinkActive can use and now we will destory this auxiliary route by giving value pane:null in parent router-outlet routerLink in app.component.ts
  (click)="navigateToMessage()" -->
  <a 
  [routerLink]="['', { outlets: { pane:['message', message.id]}}]"
  routerLinkActive="active"
    class="mail-item">
      <h3>
        {{ message.from }}
        <span>{{ message.timestamp | date:'shortTime' }}</span>
      </h3>
      <p>{{ message.summary }}</p>
    </a>
  `
})
export class MailItemComponent {
  @Input()
  message!: Mail;
constructor(private router:Router){
}
// navigateToMessage(){
//   //Auxiliary Navigation API //navigate through javascript api
//   this.router.navigate(['', { outlets: { pane:['message', this.message.id]}}])

// }

}
