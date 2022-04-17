import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-two',
  encapsulation: ViewEncapsulation.ShadowDom, //ViewEncapsulation.Native deprecated
  styles: [`
    .example-two {
      background: #9f72e6;
      font-size: 19px;
      color: #fff;
      margin-bottom: 10px;
      padding: 5px 7px;
    }
    .example-one {
      border: 3px solid red; //#9f72e6 //ViewEncapsulation.ShadowDom in shadowDom style does not effect in other component with same name like example-one (here example-one act like natively style which does not effect other component style nor overwrite like in ViewEncapsulation.ShadowDom which is actlike globally and effect all forexample in component three)
      font-size: 14px;
      color: #9f72e6;
      padding: 5px 7px;
    }
  `],
  template: `
    <div class="example-two">
      Example Two
    </div>
    <div class="example-one">
      Example One!!
    </div>
  `
})
export class ExampleTwoComponent {

}