import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()

// canLoad guard 
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService) {}
  canLoad() { // canload comes from implements CanLoad inteface
    return this.authService.checkPermissions();
  }
}