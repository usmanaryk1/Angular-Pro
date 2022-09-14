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
  <div class="mail-reply">
    <textarea
      (change)="updateReply('$event.target.value')"
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.reply = '';
    });
  }

  updateReply(value: string) {
    this.reply = value;
  }

  sendReply() {
    console.log('Sent!', this.reply);
  }
}
