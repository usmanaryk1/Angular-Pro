import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-selector',
  styleUrls: ['stock-selector.component.scss'],
  template: `
    <div class="stock-selector" [formGroup]="parent">

      <div formGroupName="selector">
        <select formControlName="product_id">
          <option value="">Select stock</option>
          <option
            *ngFor="let product of products"
            [value]="product.id">
            {{ product.name }}
          </option>
        </select>

        <input 
          type="number"
          step="10"
          min="10"
          max="1000"
          formControlName="quantity">
          
          <!-- reuseable component -->
          <stock-counter
          [step]="10"
          [min]="10"
          [max]="1000"
          ></stock-counter>

        <button type="button"
        (click)="onAdd()">
          Add stock
        </button>
        
      </div>
    </div>
  `
})
export class StockSelectorComponent {
  @Input()
  parent!: FormGroup;
  
  @Input()
  products!: Product[];
  //send output to store in in the formArray
  @Output()
  added:EventEmitter<any>= new EventEmitter<any>();

  //send event to store stoke in the formArray so we can push item in the array to add via this output event
  onAdd(){
    this.added.emit((this.parent.get(['selector']) as FormArray).value)
    //reset the selector form 
    // BIG NOTE----> if use reset so we don't loose the controll like ng-valid ng-untouched ng-pristine and if patchvalue use the ng-dirty not reset to ng-pristine and others also not change so we lose the control and same in setValue use but main diff b/w patchValue (either all or some value can reset) and setValue need to give key value pair of each item in that particular formControl (all value need to be reset)
    this.parent.get('selector')?.reset({
      product_id:'',
      quantity:10
    })

  }
}