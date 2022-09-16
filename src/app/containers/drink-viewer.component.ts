import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../food.service';

interface Drink {
  name: string,
  price: number
}

// 2.4-Aliased Class Provider: useExisting //Use Aliased Provider useExisting when you want to use the new provider in place of the old Provider.{ provide: ProductService, useExisting: NewProductService },{ provide: NewProductService, useClass: NewProductService },
export abstract class DrinkService {
  getDrinks!: () => Observable<Drink[]>;
}


@Component({
  selector: 'drink-viewer',
 //useExisting
  providers: [
    FoodService,
    {provide: DrinkService, useExisting: FoodService}

  ],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency:'USD':'symbol' }}
      </div>
    </div>
  `
})
export class DrinkViewerComponent implements OnInit {
  items$!: Observable<Drink[]>;
  constructor(private foodService: DrinkService) {}
  ngOnInit() {
    this.items$ = this.foodService.getDrinks(); // only limited to getDrinks service method not show others like getPizzas(){} methods etc..
  }
}
