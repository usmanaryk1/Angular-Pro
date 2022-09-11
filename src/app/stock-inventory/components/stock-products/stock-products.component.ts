import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

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
            <button type="button"
            (click)="onRemove(item, i)"
            >Remove</button>
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

   //send output event to stck-Inventory in the formArray to remove
   @Output()
   removed:EventEmitter<any>= new EventEmitter<any>();
 
   //send event to remove stoke in the formArray so we can removeAt()/splice() item in the array to remove via this output event
   onRemove(group:AbstractControl, index:number){
     this.removed.emit({group, index})//like {group:group, index:index}
   }
   
}
