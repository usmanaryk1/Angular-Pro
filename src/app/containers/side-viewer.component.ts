import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../food.service';

interface Side {
  name: string,
  price: number
}

export function sidesFactory(httpClient:any){//if wanna create dynamically intence each time use useFactory
  //useFactory use if conditally service or anything wana return   
  return new FoodService(httpClient, 'http://localhost:3000/sides')
 }

@Component({
  selector: 'side-viewer',
  //here we have useClass meand our own providers in the component usually its proveide in app.module.ts
  providers: [
    {provide:FoodService ,
      //pass a HttpClient as value and make availabel inside useFactory function
       useFactory: sidesFactory,// it is use to compatibale a head of time (AOT) of angualr compiler
       deps:[ //deps is short form of array of dependency
        HttpClient //up we instanciate our http and pass a string then
       ]
      
      }
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
