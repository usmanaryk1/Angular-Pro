import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-products',
  styleUrls: ['stock-products.component.scss'],
  template: `
    <div class="stock-product" [formGroup]="parent">
      <!-- Give/select/chose the name of that parent stock Array name formArrayName="stock"-->
      <div formArrayName="stock">
        <div *ngFor="let item of stock; index as i">
          <!-- one level further down means inside formArrayName again we need dynamica formGroupName and inside of that group id and quantity should create like selector and quantity chould be changeable like in cart -->
          <div [formGroupName]="i" class="stock-product__content">
            <!-- detail comes here like product and quentity -->
            <div class="stock-product__name">
              {{ item.value.product_id }}
            </div>
            <input
              type="number"
              step="10"
              min="10"
              max="1000"
              formControlName="quantity"
            />
            <!--also need button if wana remove prodct from stock -->
            <button type="button">Remove</button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class StockProductsComponent {
  @Input()
  parent!: FormGroup;

  //get the controll of stock // for let item of stock
  get stock(){
    return (this.parent.get('stock') as FormArray).controls; // for type check that this is a as FormArray
  }
}
