import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-inventory',
  styleUrls:['./stock-inventory.component.scss'],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">

      <!-- we make it reuseable component -->
      <!-- passing the whole form group inside the dumb component and use like formGroupName="store" accordingly -->
        <stock-branch
          [parent]="form">
        </stock-branch>

        <!-- let the user select -->
        <stock-selector
        [parent]="form"
        [products]="products">
        </stock-selector>
        
        <!-- selected added in store in form array -->
        <stock-products
          [parent]="form">
        </stock-products>

        <div class="stock-inventory__buttons">
          <button 
            type="submit"
            [disabled]="form.invalid">
            Order stock
          </button>
        </div>

        <pre>{{ form.value | json }}</pre>

      </form>
    </div>
  `
})
export class StockInventoryComponent {
    products: Product[] = [
        { "id": 1, "price": 2800, "name": "MacBook Pro" },
        { "id": 2, "price": 50, "name": "USB-C Adaptor" },
        { "id": 3, "price": 400, "name": "iPod" },
        { "id": 4, "price": 900, "name": "iPhone" },
        { "id": 5, "price": 600, "name": "Apple Watch" },
      ];
      
    // There are 3 main group in this form Store , selector, and stock
  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    //add the value dynamically in the form array
    stock: new FormArray([])
  })

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}