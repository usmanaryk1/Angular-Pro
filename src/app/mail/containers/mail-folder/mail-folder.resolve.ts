import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { MailService } from '../../mail.service';
import { Mail } from '../../models/mail.interface';

//slightly act like middleware between component and router
@Injectable()
export class MailFolderResolve implements Resolve<Mail[]> { //
  constructor(private mailService: MailService) {}
  // this resolve function come from implements Resolve<Mail[]>
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {//ActivatedRouteSnapshot have the current route information // this resolve method auto matically called from mail.module routes path
    console.log("resolver");
    return this.mailService.getFolder(route.params.name); //from service get data by name either inbox or trash and that name comes from route params
  }
}