import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

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
            <!-- which id is here then it shows the same product related to that id via entities which we made productMap in stock-inventory container in ngOnIt with forkjoin -->
            <!--  {{ getProduct(item.value.product_id) | json }} -->
            {{ getProduct(item.value.product_id)?.name }}
            </div>
            <div class="stock-product__price">
            <!--  currency:'USD'==> USD100 or if wana show $ use 2nd flag true like (currency:'USD':true)now changed into currency:'USD':'symbol'==> $100 -->
                {{ getProductentity(item.value.product_id)?.price | currency:'USD':'symbol'}}
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
  //two methods use for make entities any one can use from both (mapp or entitiess)
  @Input()
  mapp!:Map<number, Product>
  @Input()
  entitiess!:any

  // get the product name and show via call method
  getProduct(id:number){
    //call too much time ???
      console.log("this.mapp,this.mapp.get(id)",this.mapp,this.mapp.get(id));
    return this.mapp.get(id)
  }
  //or
  getProductentity(id:number){
    //call too much time ???
      console.log("this.entitiess[id]",this.entitiess,this.entitiess[id]);
    return this.entitiess[id];
  }

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
