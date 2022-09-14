import { Component } from '@angular/core';

@Component({
  selector: 'mail-app',
  styleUrls: ['mail-app.component.scss'],
  template: `
  <!-- primary outlet -->
    <div class="mail">

    <!-- <h1>Activated parent by writing on url hard coded loacalhost:4200/mail if use canActivateChild guard</h1> -->
    <router-outlet
    (activate)="onActivate($event)"
    (deactivate)="onDeactivate($event)">
    </router-outlet>
    </div>

  <!-- auxiliary outlet diff with name-->
    <div class="mail">
      <router-outlet name="pane">
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
