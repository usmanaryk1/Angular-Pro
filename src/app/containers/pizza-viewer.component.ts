import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../food.service';

interface Pizza {
  name: string,
  price: number
}

// 2.4-Aliased Class Provider: useExisting //Use Aliased Provider useExisting when you want to use the new provider in place of the old Provider.{ provide: ProductService, useExisting: NewProductService },{ provide: NewProductService, useClass: NewProductService },
export abstract class PizzaService {
  getPizzas!: () => Observable<Pizza[]>;
}

@Component({
  selector: 'pizza-viewer',
  //useExisting
  providers: [
    FoodService,
    {provide: PizzaService, useExisting: FoodService}

  ],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency:'USD':'symbol' }}
      </div>
    </div>
  `
})
export class PizzaViewerComponent implements OnInit {
  items$!: Observable<Pizza[]>;
  constructor(private foodService: PizzaService) {}
  ngOnInit() {
    this.items$ = this.foodService.getPizzas(); // only able to get pizza method from service we actually restrict other message to show here
  }
}
