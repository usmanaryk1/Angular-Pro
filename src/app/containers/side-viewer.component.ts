import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../food.service';

interface Side {
  name: string,
  price: number
}

// 2.4-Aliased Class Provider: useExisting //Use Aliased Provider useExisting when you want to use the new provider in place of the old Provider.{ provide: ProductService, useExisting: NewProductService },{ provide: NewProductService, useClass: NewProductService },
export abstract class SideService {
  getSides!: () => Observable<Side[]>;
}

@Component({
  selector: 'side-viewer',
  //useExisting
  providers: [
    FoodService,
    {provide: SideService, useExisting: FoodService}

  ],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency:'USD':'symbol' }}
      </div>
    </div>
  `
})
export class SideViewerComponent implements OnInit {
  items$!: Observable<Side[]>;
  constructor(private foodService: SideService) {}
  ngOnInit() {
    this.items$ = this.foodService.getSides(); // only able to get sides method from service we actually restrict other message to show here
  }
}
