import { Component, Input } from '@angular/core';

@Component({
  selector: 'stock-counter',
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
export class StockCounterComponent  {

// we use this component but we lost the controll like ng-touched etc.. so in next commit we go through that controlValueAccessor 

  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  value: number = 10; // becaue we select 10 by default in formControl

  increment() {
    if (this.value < this.max) {// increment value till max like not more then 1000 
      this.value = this.value + this.step;
    }
  }
  decrement() { // decrement value till min like not less then 10
    if (this.value > this.min) {
      this.value = this.value - this.step;
    }
  }
}