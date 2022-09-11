import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
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
        [products]="products"
        (added)="addStock($event)">
        </stock-selector>
        
        <!-- selected added in store in form array -->
        <stock-products
          [parent]="form"
          (removed)="removeStock($event)"
          >
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
      
      constructor(private fb:FormBuilder){}
    // There are 3 main group in this form Store , selector, and stock
  form = this.fb.group({
    store: this.fb.group({
      branch: '',
      code: ''
    }),
    selector: this.createStock({}),//create reuseable FormGroup this.FormGroup({})
    //add the value dynamically in the form array
    stock: this.fb.array([
        this.createStock({product_id:1 , quantity:10}),
        this.createStock({product_id:3 , quantity:50})
    ])
  })

  //create reuseable FormGroup this.FormGroup({})
  createStock(stock:any){
    return this.fb.group({
        product_id: (parseInt(stock.product_id, 10) || ''),//not converting into interger/number ??
        quantity: (stock.quantity || 10)
      })
  }

  //add stock in stock FormArray 
  addStock(stock:any){
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock))
  }
  //remove stock in stock FormArray 
  removeStock({group, index}:{group:FormGroup, index:number}){//like {group:group, index:index}
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index)
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}