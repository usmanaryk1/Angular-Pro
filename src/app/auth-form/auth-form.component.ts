import { Component, Output , EventEmitter} from '@angular/core';
import { User } from './auth-form.interface';

@Component({
    selector: 'auth-form',
    template:`
    <div>
        <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">

<!-- injecting dynamic single or multi dom node by ng-content(content projection) -->
<!-- content projection => show content/value coming through selectors like show different heading (create or login) dynamically at same form-->
       
        <ng-content></ng-content>

        <label>
        Email:
        <input type="email" name="email" ngModel >
        </label>
        
        <label>
        Password:
        <input type="password" name="password" ngModel >
        </label>

        
        <button type="submit">
        Submit
        </button>
       
            
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