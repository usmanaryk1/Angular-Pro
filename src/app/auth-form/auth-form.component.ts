import { Component, Output , EventEmitter} from '@angular/core';
import { User } from './auth-form.interface';

@Component({
    selector: 'auth-form',
    template:`
    <div>
        <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        
<!-- injecting dynamic single or multi dom node by ng-content(content projection) -->
<!-- content projection => show content/value coming through selectors like show different heading (create or login) dynamically at same form-->
<!-- projection slot => if there is more then 1 ng-content projection then use select attribute  to show spacific element/.my-class/#id like select="h3"  <ng-content select="h3"></ng-content>  <ng-content select="button"></ng-content>-->
<!-- projecting component => if wanna display nother component such as projection a auth-remember component into auth-form <auth-form> <auth-remember ></auth-remember> </auth-form>-->
       
        <ng-content select="h3"></ng-content>

        <label>
        Email:
        <input type="email" name="email" ngModel >
        </label>
        
        <label>
        Password:
        <input type="password" name="password" ngModel >
        </label>

<!-- projecting component => auth-remember component projrction select by selector(auth-form) or by giving class name like .rememberClass and declear that class in app.component.ts <auth-remember class="rememberClass" ></auth-remember>-->
        <ng-content select="auth-remember"></ng-content>

        <ng-content select="button"></ng-content>
       
            
        </form>
    </div>

    
    `
})
export class AuthFormComponent{
 @Output()
 submitted:EventEmitter<User>= new EventEmitter<User>()
    onSubmit(event:User){
        console.log("auth-form",event);
        this.submitted.emit(event);
    }

}