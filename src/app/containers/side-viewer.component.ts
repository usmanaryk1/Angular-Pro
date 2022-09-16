import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../food.service';

interface Side {
  name: string,
  price: number
}

@Component({
  selector: 'side-viewer',
  //here we have useClass meand our own providers in the component usually its proveide in app.module.ts
  providers: [
    // FoodService, // this is a shorthand syntax of {provide:FoodService , useClass:FoodService} use one only if both name are same like
    {provide:FoodService , useClass:FoodService}//for moke/fake api we use that useClass for testing purpose etc..
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
  constructor(private foodService: FoodService) {}
  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }
}
