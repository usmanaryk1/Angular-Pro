import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

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

        <stock-selector
          [parent]="form">
        </stock-selector>

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
    stock: new FormArray([])
  })

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}