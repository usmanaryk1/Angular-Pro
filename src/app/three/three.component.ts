import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-three',
  encapsulation: ViewEncapsulation.None,//if use ViewEncapsulation.None then example-one style act like globally and in all other component overwrite/effect the style where same .class matches like(example-one) 
  styles: [`
    .example-one { //if use ViewEncapsulation.None then example-one style act like globally and overwrite the style in all other component
      border: 2px solid green;
    }
  `],
  template: `
    <div class="example-three">
      Example Three
    </div>
    <div class="example-one">
      Example One!!!
    </div>
  `
})
export class ExampleThreeComponent {

}