import { AfterContentInit, AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

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

<div #entry > </div>
<!-- intantialte custom template and injected into the dynamic #entry component -->

<ng-template #tmpl >
Tood Motto : England, UK.
</ng-template>

</div>

`
})
export class AppComponent implements AfterContentInit {//for use ViewChild implements AfterContentInit lifecycle hook rather then AfterViewInit because we can setup our component subscribe to the output and change the data before the actual view has been initialize 
  title = 'AngularPro';

  // to interact dom element #entry div use ViewChild
  // passing 2nd argument(read) in ViewChild, this is essentially changes when we get back which its gives us different lockup token that we previously used to viewchild where we got element ref (entry!=> local use in ts)
  @ViewChild('entry' , { read:ViewContainerRef}) entry!:ViewContainerRef; // use ! for error solve initialize undefined also can use ?(but not working here)
  
  //alternate way of create custom template component with templateref and createembeddedview and show in the dynamic #entry component 
  @ViewChild('tmpl') tmpl!:TemplateRef<any>; // use ! for error solve initialize undefined also can use ?(but not working here)

  ngAfterContentInit(){
    console.log("ngAfterContentInit");

    setTimeout(() => {
      this.entry.createEmbeddedView(this.tmpl)//tmpl itself becomes our embeddedview//its create template below the div like router does 
    }, 1000);
   
  }


  loginUser(user:any){
    console.log("Login User",user);
  }
}
