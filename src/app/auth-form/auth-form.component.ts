import { Component, Output , EventEmitter , AfterContentInit, ContentChildren, QueryList} from '@angular/core';
import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember.component';

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


<!-- now access the checkbox value checked true or false (from component projection via contentchild and aftercontentinit) and set if statement dynamically 
<!--this local variable showMessage will be true or false based on checkbox checked true or false -->    
    <div *ngIf="showMessage">
        You will be logged in for 30 days.
    </div>

        <ng-content select="button"></ng-content>
       
            
        </form>
    </div>

    
    `
})
export class AuthFormComponent implements AfterContentInit{

    //----------content Child to contentChildren with querylists implements -------//
    showMessage:boolean=false;
    //now how to access the auth-remember component checkbox value true or false and assign to showMessage to show and hide while clicking the checkbox
     
    // @ContentChild(AuthRememberComponent) //get the component access and use that remember value in ngAfterContentInit 
    // //  remember: AuthRememberComponent;
    //  remember: any;
    
    //change ContentChild into ContentChildren and QueryList
    @ContentChildren(AuthRememberComponent) //get the component access and use that remember value in ngAfterContentInit 
    //  remember: AuthRememberComponent;
     remember!: QueryList<any> ; //The "!" syntax exists for those common-ish cases where you can't guarantee that the value will be defined immediately. It's an escape hatch, and shouldn't be relied on, as it can make your code less safe. A default value is usually preferred.//or use "strictPropertyInitialization": false in tsconfig.json
     
     ngAfterContentInit(){
        // console.log(this.remember);
        //use if condition because first form create dont have this checkbox first will give undefined then will give AuthRememberComponent {checked: EventEmitter}
        if(this.remember){
            // now get the value of checkbox and assign to showMessage, subscribe the output submitted event
            // this.remember.checked.subscribe((checked:boolean)=> this.showMessage=checked)
            
            //impliment contentChildren and get all different method for query like changes, dirty, filter, forEach, map etc
            //content children injected 3 times so we use querylist to each particular children,contentchildren auth-remember injected 3 times so with contentchildren we get querylist and iterate that querylist and subscribe each of outputs 
            //just for the practice to know how to work contentchildren querylist
            this.remember.forEach(item=> {
                item.checked.subscribe((checked:boolean)=> this.showMessage=checked)
            })
        }
        
       } 
    //----------//content Child implements -------//

 @Output()
 submitted:EventEmitter<User>= new EventEmitter<User>()
 
    onSubmit(event:User){
        console.log("auth-form",event);
        this.submitted.emit(event);
    }

}