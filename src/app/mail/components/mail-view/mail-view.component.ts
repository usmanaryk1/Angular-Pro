import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-view',
  styleUrls: ['mail-view.component.scss'],
  template: `
  <div class="mail-view">
    <h2>{{ (message$ | async)?.from }}</h2>
    <p>{{ (message$ | async)?.full }}</p>
  </div>

  <!-- canDeActivate use so form which we fill prevent to leave the form accidenty or cannot leave form without save or permission to leave -->
  <div class="mail-reply">
    <textarea
      (change)="updateReply($event)"
      placeholder="Type your reply..."
      [value]="reply">
    </textarea>
    <button type="button" (click)="sendReply()">
      Send
    </button>
  </div>

  `
})
export class MailViewComponent {
  reply = '';
  message$: Observable<Mail> = this.route.data.pipe(map(x=> x.message));

  // take a property name hasUnsavedChanges to check for deactivate guard 
  hasUnsavedChanges:boolean= false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.reply = ''; // reset the message textarea empty when navigate to somewhere else
      this.hasUnsavedChanges=false;
    });
  }

  updateReply(value: Event) {
    this.reply = (value.target as HTMLInputElement).value;
    this.hasUnsavedChanges=true;
  }

  sendReply() {
    console.log('Sent!', this.reply);
    this.hasUnsavedChanges=false;
  }
}
