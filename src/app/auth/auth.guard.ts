import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad,} from '@angular/router';



import { AuthService } from './auth.service';

@Injectable()

// canLoad guard 
export class AuthGuard implements CanLoad, CanActivate , CanActivateChild {
  constructor(private authService: AuthService) {}
  
  // check if has permission
  canLoad() { // canload comes from implements CanLoad inteface
    return this.authService.checkPermissions();
  }
  
  // check if isLogedIn
  canActivate() {
    return this.authService.isLoggedIn();
  }
  
  //Activated parent by writing on url hard coded loacalhost:4200/mail if use canActivateChild guard
  canActivateChild(){
    // return false;
    return true;
  }
  
}