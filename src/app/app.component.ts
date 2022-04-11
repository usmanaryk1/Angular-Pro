import { AfterContentInit, AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
  <div>
<!-- ----------For creat Dynamic component in app.component.ts instead <auth-form></auth-form> use <div #entry ></div> with the hepl of ViewChild its type ViewContainerRef, implement lifecycle AfterContentInit and DI in constructor ComponentFactoryResolver-------- -->

<!--  <auth-form 
      (submitted)="loginUser($event)">
      </auth-form>
-->

<!-- instead use auth-form create dynamic component take a div with templateRef #entry to create dynamic component -->
<!-- this div act as container -->
<!-- using this templateRef #entry we are going to use viewChild decarator and communicate directly to this piece of dom to allow us to injuct this component -->

<button (click)="destoryComponent()">
Destory
</button>

<div #entry > </div>

</div>

`
})
export class AppComponent implements AfterContentInit ,AfterViewInit {//for use ViewChild implements AfterContentInit lifecycle hook rather then AfterViewInit because we can setup our component subscribe to the output and change the data before the actual view has been initialize 
  title = 'AngularPro';

  //To destroy the dynamic component need to declear globally so that it could access anywhere 
  component!:ComponentRef<AuthFormComponent>//use the definite assignment assertion operator, !:// Not initialized, but no error

  // to interact dom element #entry div use ViewChild
  // passing 2nd argument(read) in ViewChild, this is essentially changes when we get back which its gives us different lockup token that we previously used to viewchild where we got element ref (entry!=> local use in ts)
  @ViewChild('entry' , { read:ViewContainerRef}) entry!:ViewContainerRef; // use ! for error solve initialize undefined also can use ?(but not working here)

  // need to inject resolver in constructor with type of ComponentFactoryResolver
  constructor(
    //ComponentFactoryResolver allow us to do is create a component factory based on dynamic component(AuthFormComponent) and then inhand we use viewContainerRef which will be this.entry to essentially allow us to create a component in this particular div (<div #entry > </div>)
    private resolver:ComponentFactoryResolver,
  ){}

  ngAfterContentInit(){
    console.log("ngAfterContentInit");
    //start using resolver which we has been injected and along side this we are going to use this our enrty ViewChild(@ViewChild('entry') to bascally instantiate the compnent and use the viewCntainerRef to create a component and injected into our template here(<div #entry > </div>) 
    //this is essentially going a function which is simply resolve the component
    const authFormFactory= this.resolver.resolveComponentFactory(AuthFormComponent)//this is create a factory for the component now we are going to create a component 
    // now create a new component with he help of viewChild interact with the dom node enrty
    
    //undefined initialize so use setTimeout not good i dont get idea why its giving error this.entry red underline (gives error only in development mode i think , in production mode error will not accour)
    setTimeout(() => {
      this.component = this.entry.createComponent(authFormFactory)//or const component = this.entry.createComponent(this.resolver.resolveComponentFactory(AuthFormComponent))
    
    //input=> dynamic component input (not have @Input title=Login but optionally can use) its value can access from its instance (instance exposes all property)(and then overwrite it) which create with createComponent(componentName)
    //this is how dynamically change the @Input() title in compile time
    console.log(this.component.instance); //here title public porperty can overwrite//AuthFormComponent {title: 'Login', submitted: EventEmitter_, __ngContext__: LRootView(31)}
    this.component.instance.title='Create account';//overwriting(Re-itterate) the title //here in authform title not declear as @Input() title but its value is change with instance but optionally could use @Input() title if like too;
    
    //output=> dynamic component output can access by subscribing the output event (like submitted output event here)
    console.log(this.component.instance.submitted); //here submitted output event can access //AuthFormComponent {title: 'Login', submitted: EventEmitter_, __ngContext__: LRootView(31)}
    this.component.instance.submitted.subscribe(this.loginUser);//subscribe the user object here which showing in #entry div;
  
  
  },1000);
  
  }

  ngAfterViewInit(){
  console.log("ngAfterViewInit");
  }

  //dynamically destory a component which is dynamically created 
  destoryComponent(){
    //calling the method and destory the dynamically component
    this.component.destroy();
  }

  loginUser(user:any){
    console.log("Login User",user);
  }
}
