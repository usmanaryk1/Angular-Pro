import { AfterContentInit, AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
  <div>

<!-- we learned how to injected ng-template into our dom beside to partucular <div #entry ></div> div, using the  API such as creteEmbededView whic is expose to us via a ViewContainerRef -->
<!-- <div #entry > </div> in this video infact change this div to use this directive called ngTemplateOutlet (using ng-container whichis never get render in the dom ony inside material get render in th dom like div)-->

<ng-container
[ngTemplateOutlet]="tmpl"> <!--this is cleaver directive because we just pass simple template ref tmpl into the ng component outlet and it will be auto maticaly rendered in the dom-->

</ng-container>

<ng-template #tmpl > <!-- this ng-template #tmpl will render inside the ng-container with the help of ngTemplateOutlet directive-->
 Tood Motto : England, UK
</ng-template>

</div>

`
})
export class AppComponent  {


}
