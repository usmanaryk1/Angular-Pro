import { Component, Output , EventEmitter , AfterContentInit, ContentChildren, QueryList, AfterViewInit, ViewChildren, ChangeDetectorRef, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { User } from './auth-form.interface';
import { AuthMessageComponent } from './auth-message.component';
import { AuthRememberComponent } from './auth-remember.component';

@Component({
selector: 'auth-form',
styles: [`
  .email { border-color: #9f72e6; }
`],
template: `

<!-- ----------For creat Dynamic component in app.component.ts instead <auth-form></auth-form> use <div #entry ></div> with the hepl of ViewChild its type ViewContainerRef, implement lifecycle AfterContentInit and DI in constructor ComponentFactoryResolver-------- -->
<!-- ----------Return to back where hard codded everything and just emit output submitted-------- -->

  <div>
    <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
      <h3>{{ title }}</h3>
      <label>
        Email address
        <input type="email" name="email" ngModel #email>
      </label>
      <label>
        Password
        <input type="password" name="password" ngModel>
      </label>
      <button type="submit">
        {{ title }}
      </button>
    </form>
  </div>
`
})
export class AuthFormComponent {
  
    constructor( ){}


title = 'Login';
 @Output()
 submitted:EventEmitter<User>= new EventEmitter<User>()
 
    onSubmit(event:User){
        console.log("auth-form",event);
        this.submitted.emit(event);
    }

}