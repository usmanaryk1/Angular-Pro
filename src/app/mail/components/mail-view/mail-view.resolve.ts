import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { MailService } from '../../mail.service';
import { Mail } from '../../models/mail.interface';

@Injectable()

//preloading data called resolver via route
export class MailViewResolve implements Resolve<Mail> {
  constructor(private mailService: MailService) {}
  //this resolve comes from implements Resolve<Mail>
  resolve(route: ActivatedRouteSnapshot) {
    return this.mailService.getMessage(route.params.id);
  }
}