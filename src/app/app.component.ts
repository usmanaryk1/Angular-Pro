import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
  <div>
  There are three types of encapsulation 1=Emulated(by default) 2=ShadowDom(Native) 3=None(style act like declear globale style in to the Dom like styles.scss) <br>
  
  One is Emulated nghost-rendom-id like (.example-one[_ngcontent-itr-c11]) inline style
  <example-one></example-one>
  
  Two is shadow-root (open) and all style lives inside this root (encapsulation:ViewEncapsulation.ShadowDom create brand new Dom for us) chrome support shadowdom
  <example-two></example-two>
  
  Three None styles act like globally declear and overwrite/effect other component class style so we don't want to do this to avoid complicaion in styling
  <example-three></example-three>
</div>

`
})
export class AppComponent  {

}
