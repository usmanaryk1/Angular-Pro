import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';


import { AuthService } from './auth.service';

@Injectable()

// canLoad guard 
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService) {}
  // check if has permission
  canLoad() { // canload comes from implements CanLoad inteface
    return this.authService.checkPermissions();
  }
  
  // check if isLogedIn
  canActivate() {
    return this.authService.isLoggedIn();
  }
 
 
}