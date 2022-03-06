import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
  <div>
<!-- content projection passing content/value through selectors using ng-content-->
  <auth-form 
  (submitted)="createUser($event)">
  <h3> Create account </h3>
  <button type="submit">
  Join us
  </button>
  </auth-form>

  <auth-form 
  (submitted)="loginUser($event)">
  <h3> Login </h3>
  <button type="submit">
  Login
  </button>
  </auth-form>
  
  </div>
  `
})
export class AppComponent {
  title = 'AngularPro';

  createUser(user:any){
    console.log("create User",user);
  }
  loginUser(user:any){
    console.log("Login User",user);
  }
}
