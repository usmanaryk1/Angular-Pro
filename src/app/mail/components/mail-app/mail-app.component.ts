import { Component } from '@angular/core';

@Component({
  selector: 'mail-app',
  styleUrls: ['mail-app.component.scss'],
  template: `
    <div class="mail">
      <router-outlet
        (activate)="onActivate($event)"
        (deactivate)="onDeactivate($event)">
      </router-outlet>
    </div>
  `
})
export class MailAppComponent {

  // can see which path is activated a nd can do someting on activate or deactivate events on router-outlet
  onActivate(event: any) {
    console.log('Activate:', event);
  }
  onDeactivate(event: any) {
    console.log('Deactivate:', event);
  }
}
