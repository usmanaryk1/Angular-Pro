import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// we are going to using the angular behind the scene contrl of ng-pristine ng-untouched ng-valid etc...
const COUNTER_CONTROL_ACCESSOR = { // create a constant object to provide our component in the providers:[COUNTER_CONTROL_ACCESSOR]
  provide: NG_VALUE_ACCESSOR, // gaining access to our valueAccessor means behind the scene this is talk to the <input type="number"> and control the min max step with formControName means allow NG_VALUE_ACCESSOR by register it on our component
  useExisting: forwardRef(() => StockCounterComponent), //which component will use our access of FormControll//something we need to talk to angular bindings //we set here custome provider which is allow us to registor our stock-counter component 
  multi: true // we use multi true which is allow us to extending the ngvalueAccessor
};

//forwardRef(() make the component class hoisted other wise it will undefined like
// console.log(Hellow); Undefined becaue cannot access befor it declear if wana access before it declear called hoisted for that use forwarRed means access before it declear class StockCounterComponent
//class Hellow{}


@Component({
  selector: 'stock-counter',
  providers: [COUNTER_CONTROL_ACCESSOR], // implementing COUNTER_CONTROL_ACCESSOR interfave
  styleUrls: ['stock-counter.component.scss'],
  template: `
    <div class="stock-counter">
      <div>
        <div>
          <p>{{ value }}</p>
          <div>
            <!-- disable button when limit reached till max-->
            <button 
              type="button"
              (click)="increment()"
              [disabled]="value === max">
              +
            </button>
             <!-- disable button when limit reached till min-->
            <button 
              type="button"
              (click)="decrement()"
              [disabled]="value === min">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class StockCounterComponent implements ControlValueAccessor { //ControlValueAccessor use these 3 methods writeValue(){}, registerOnChange(){}, and registerOnTouched(){} passing a parameter as function

  //we were losted the controll like ng-touched etc.. so working on controlValueAccessor now

  //we have two internal methods 
  private onTouch!: Function;
  private onModelChange!: Function;

  registerOnTouched(fn: Function) {
    this.onTouch = fn;// assigning fn to onTouch internal function which pass down by via angualr
  }
  
  registerOnChange(fn:Function) {
    this.onModelChange = fn;//call on when our model change on our custome controll
  }
  
  writeValue(value: number) {
    this.value = value || 0; // assign any initial and changed value 
  }

  //NOTE in next commit ---> In next commit in git we will use keyboard event to tight our blur and focuse events on this component 

  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  value: number = 10; // becaue we select 10 by default in formControl

  increment() {
    if (this.value < this.max) { // increment value till max like not more then 1000 
      this.value = this.value + this.step;
      this.onModelChange(this.value);//call the reactive form function on something change
    }
    this.onTouch(); //call the reactive form function on touched
  }
  decrement() {
    if (this.value > this.min) { // decrement value till min like not less then 10
      this.value = this.value - this.step;
      this.onModelChange(this.value);//call the reactive form function on something change
    }
    this.onTouch(); //call the reactive form function on touched
  }
}