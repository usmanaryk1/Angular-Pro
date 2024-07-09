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

          <!-- reuseable component and give formControlName="quantity" to access the controlValueAccessor-->
          <stock-counter
          [step]="10"
          [min]="10"
          [max]="1000"
          formControlName="quantity"
          ></stock-counter>
      <!-- if selected stock already exist in store then disable button and if not anything selected then disable too  -->
        <button type="button"
        [disabled]="stockExists || notSelected"
        (click)="onAdd()">
          Add stock
        </button>

        <!-- if selected stock already exist in store then show error -->
        <div
          class="stock-selector__error"
          *ngIf="stockExists">
          Item already exists in the stock
        </div>

        
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

  //if not anything selected then disable the button 
  get notSelected() {
    return (
      !this.parent.get('selector.product_id')?.value
    );
  }

  //cehck the stock exist and show error message and also disable the button
  get stockExists() {
    return (
      this.parent.hasError('stockExists') && // check already exist
      this.parent.get('selector.product_id')?.dirty //and changed the selector also or chosed something too then show error
    );
  }



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