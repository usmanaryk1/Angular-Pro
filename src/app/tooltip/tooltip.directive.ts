
import { Input, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip'//export tooltip selector for use globaly in our app.component.ts in input
})
export class TooltipDirective implements OnInit {
  tooltipElement = document.createElement('div');//create a some dom node
  visible = false;//checking the visiblity stay

  @Input()//we got input which is using a type script setter and passing the value of the input and assigning the value here through the function arguments to the textcontent property 
  set tooltip(value: string | null) { //in typescript by useing the setter get the input value and assign to dom node
    this.tooltipElement.textContent = value;
  }

  hide() {
    this.tooltipElement.classList.remove('tooltip--active'); //remove the css class
  }

  show() {
    this.tooltipElement.classList.add('tooltip--active'); // add the css class
  }

  constructor(
    private element: ElementRef //injecting the element reference
  ) {}

  ngOnInit() {
    this.tooltipElement.className = 'tooltip'; // assigning the class name tooltip to the dom node
    this.element.nativeElement.appendChild(this.tooltipElement); // this dom node appeand to the native enlement
    this.element.nativeElement.classList.add('tooltip-container'); //in the native element add a class 
  }
}
