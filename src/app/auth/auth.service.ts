import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AuthService {

  user = { isAdmin: true };
  // user = { isAdmin: false }; 
  checkPermissions() { // for canLoad
    return of(this.user.isAdmin); //if isAdmin:true then can load and if isAdmin:false canot load because authGuard is using
  }
  isLoggedIn() {
    return of(true);// for canActivate
  }
}
