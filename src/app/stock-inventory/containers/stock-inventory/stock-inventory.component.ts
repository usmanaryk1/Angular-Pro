import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item, Product } from '../../models/product.interface';

import { StockInventoryService } from '../../services/stock-inventory.service';
import { StockValidators } from './stock-inventory.validators';

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
        [mapp]="productMap"
        [entitiess]="entities"
        (removed)="removeStock($event)"
        >
        </stock-products>
        
        <!-- make a total of all products -->
        <div class="stock-inventory__price">
        Total: {{total | currency:'USD':'symbol'}}
        </div>
        

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
export class StockInventoryComponent implements OnInit{
    products!: Product[];

    productMap!: Map<number,Product>//to make entities {1:{},2:{}}
    entities!:any;
    total!:number;
      
      constructor(private fb:FormBuilder, private stockService:StockInventoryService){}
    // There are 3 main group in this form Store , selector, and stock
  form = this.fb.group({

    store: this.fb.group({
      branch: ['', //initial value
              [Validators.required, StockValidators.checkBranch ], //synchronous validator // create StockValidators class and create a method checkBranch//requird and custom validation separate file
              [this.validateBranch.bind(this)] //Asynchronous validator //check from API service weather branch is exist in server database
              ], 
      code: ['', Validators.required] //requird validator use here for the validation
    }),
    selector: this.createStock({}),//create reuseable FormGroup this.FormGroup({})
    //add the value dynamically in the form array
    stock: this.fb.array([])
  },{ validator: StockValidators.checkStockExists })//its a root formGroup not a branch //option/extra validation of all formGroup here check weater selected product is already exist in cart then not add dublicate or twice

  ngOnInit(){

    //--------also run json server by write npm run db -------
      const cart = this.stockService.getCartItems();
      const products = this.stockService.getProducts();

      forkJoin([cart,products])
      .subscribe(([cart, products]:[cart:Item[], products:Product[]]) => {
       console.log(cart,products);

      //two methods use for make entities any one can use from both (mapp or entitiess)
      // 1st one
       const myMap= products.map<[number, Product]>((product)=> [product.id, product])
      console.log("myMap",myMap);
      this.productMap = new Map<number, Product>(myMap); // { 1:{} }//send it to stock-product via [map]="productMap" and @input map so can show the name of item 
      console.log("this.productMap",this.productMap);
      //or 2nd one
       this.entities = products.reduce((entities, products:Product)=>{
        return {
            ...entities,
            [products.id]:products
        };
        },{})
        console.log("entities",this.entities);
    
        // value for stock-selector
      this.products=products;
      // add item in the cart array
      cart.forEach(item=> this.addStock(item));
        //for initial total calcualtion call total function and pass a default value
        this.calculateTotal(this.form.get('stock')?.value);
        //if add stock then imidiately cahnge the total price
      this.form.get('stock')?.valueChanges.subscribe(value=> this.calculateTotal(value))
    });


      
  }

  //check weather branch exist or not in server through service call API asynchronous validator
  validateBranch(control: AbstractControl) {
    return this.stockService
      .checkBranchId(control.value).pipe(
      map((response: boolean) => response ? null : { unknownBranch: true })
    )}
  
  //total calculation via valuechanges
  calculateTotal(value: Item[]){
    const total =value.reduce((pre,next)=> {
        return pre + (next.quantity * this.entities[next.product_id].price)
    },0)
    this.total = total;
  }
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