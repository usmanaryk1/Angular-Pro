import { Component, Output , EventEmitter , AfterContentInit, ContentChildren, QueryList, AfterViewInit, ViewChildren, ChangeDetectorRef, ViewChild, ElementRef} from '@angular/core';
import { User } from './auth-form.interface';
import { AuthMessageComponent } from './auth-message.component';
import { AuthRememberComponent } from './auth-remember.component';

@Component({
    selector: 'auth-form',
    styles:[`
    .email{border-color:#9f72e6;}
    `],
    template:`
    <div>
        <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        
<!-- injecting dynamic single or multi dom node by ng-content(content projection) -->
<!-- content projection => show content/value coming through selectors like show different heading (create or login) dynamically at same form-->
<!-- projection slot => if there is more then 1 ng-content projection then use select attribute  to show spacific element/.my-class/#id like select="h3"  <ng-content select="h3"></ng-content>  <ng-content select="button"></ng-content>-->
<!-- projecting component => if wanna display nother component such as projection a auth-remember component into auth-form <auth-form> <auth-remember ></auth-remember> </auth-form>-->
       
        <ng-content select="h3"></ng-content>

        <!-- use templareRef variabel #email to use in ViewChild direct access in ts for doing styling controoling etc -->
        <label>
        Email:
        <input type="email" name="email" ngModel #email>
        </label>
        
        <label>
        Password:
        <input type="password" name="password" ngModel >
        </label>

<!-- projecting component => auth-remember component projrction select by selector(auth-form) or by giving class name like .rememberClass and declear that class in app.component.ts <auth-remember class="rememberClass" ></auth-remember>-->
        <ng-content select="auth-remember"></ng-content>


<auth-message [style.display]="(showMessage? 'inherit': 'none')"> </auth-message>

<ng-content select="button"></ng-content>
       
            
        </form>

        </div>
            
    `
})
export class AuthFormComponent implements AfterContentInit , AfterViewInit{
  
    constructor(private cd:ChangeDetectorRef){}

    //using viewChild we going to query element directly (email fetch) with the templete ref #email, with the type if ElementRef 
    @ViewChild('email') email!:ElementRef; //get email by templateref variable #email and give name to email:ElementRef to use in ts  //The "!" syntax exists for those common-ish cases where you can't guarantee that the value will be defined immediately. It's an escape hatch, and shouldn't be relied on, as it can make your code less safe. A default value is usually preferred.//or use "strictPropertyInitialization": false in tsconfig.json

    @ViewChildren(AuthMessageComponent) message!:QueryList<AuthMessageComponent>; //The "!" syntax exists for those common-ish cases where you can't guarantee that the value will be defined immediately. It's an escape hatch, and shouldn't be relied on, as it can make your code less safe. A default value is usually preferred.//or use "strictPropertyInitialization": false in tsconfig.json
    ngAfterViewInit() {
        console.log(this.email);//now we fetch the email element //ElementRef {nativeElement: input.ng-untouched.ng-pristine.ng-valid}



        //Using ElementRef and nativeElement
        //nativeElement essentially exposes the particular dom node in this case our input and we can call these methods such as setAttribute and add a class name usig classList and also focus on that particular element 
        //with NativeElements add some attribute, classes and invoke some native methods
        console.log(this.email.nativeElement);//we have access dom node email input with nativeElement//<input type="email" name="email" ngmodel="" ng-reflect-name="email" ng-reflect-model="" class="ng-untouched ng-pristine ng-valid">
        
        //placeholder added via angular which is shadow-root which means shadow-dom which is actually gives us placeholder on this element
        // setAttribute like in plane js first get element and then set element.setAttribute but in angular have access like this
        this.email.nativeElement.setAttribute('placeholder','Enter your email address')//setAttribute('attribute','vlue')
        // classList add class to style and then first get element and then set element.classList.add('className')
        this.email.nativeElement.classList.add('email')//classList.add('email')
        // focus we can access the  method on the element such as focus()
        this.email.nativeElement.focus()//focus() method




        // console.log(this.message);
        
        //ViewChildren only works in ngAfterViewinit
        // if(this.message){//safety check
        //     console.log(this.message);
        //     setTimeout(() => { //jugar wprking because this.message is undefined here
        //         this.message.forEach(message=> message.days=30); //error if not use settimeout => Expression has changed after it was checked. Previous value: '7'. Current value: '30'. // this error is occur only in development moode just because for doubble check and will not occur in  production mood 
        //     }); 
        // }

        // second way use built in API's ChangeDetectorRef rather then settimeout
        // not encourage to doing this its just how to use API's
        // use if this things happen in such cases like this one
        // learn how to use changeDetector rather then settimeout if you have a come accros this use case
        if(this.message){//safety check
            console.log(this.message);
         this.message.forEach(message=> message.days=30); //error if not use settimeout orAPI's ChangeDetectorRef => Expression has changed after it was checked. Previous value: '7'. Current value: '30'.
        //    use API's ChangeDetectorRef to solve the error 
            this.cd.detectChanges();
        }

    
    }


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