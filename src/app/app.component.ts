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

<!-- projecting component => if wanna display nother component into the current auth-form component such as projection a auth-remember component into auth-form <auth-form> <auth-remember ></auth-remember> </auth-form> only in login form-->
  <auth-form 
  (submitted)="loginUser($event)">

  <!-- ----------content inside the auth-form called contentchild of auth-form component, to access that child content in auth-form use contentchild and aftercontentinit life cycle hooks-------- -->
  <h3> Login </h3>
  
  
  <!-- ----------multiple auth-remember to impliment ConrentChildren and QueryList-------- -->
  <auth-remember (checked)="rememberUser($event)" > </auth-remember>

  <button type="submit">
  Login
  </button>
  </auth-form>

</div>

<!-- life cycle hooks -->
<div>
<img [src]="LifeCycleHooks" alt="LifeCycleHooks" width="800" height="600">
<img [src]="LifeCycleHooks1" alt="LifeCycleHooks1" >
<a href="https://www.c-sharpcorner.com/article/learn-about-angular-component-hook-life-cycle/" > angular life cycle hooks</a>
</div>
`
})
export class AppComponent {
  title = 'AngularPro';
  
    //bind logo path with img src (property binding)
    LifeCycleHooks:string="assets/lifecyclehooks.png"
    LifeCycleHooks1:string="assets/lifecyclehooks1.jpg"

  //initial state of remember me
  rememberMe:boolean=false;
  rememberUser(remember:boolean){
    // console.log("remember",remember);
    this.rememberMe=remember;
  }

  createUser(user:any){
    console.log("create User",user);
  }
  loginUser(user:any){
    console.log("Login User",user, this.rememberMe);
  }
}
