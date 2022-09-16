import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap , catchError} from 'rxjs/operators';

import { HttpClient } from "@angular/common/http";


@Injectable()
export class FoodService {

  //hard codded api its a initial/first step of learning 
  api:string= "http://localhost:3000/pizzas"; // all component will show only pizzas
  //after that we will use useValue in provider { provide: 'api', useValue: 'http://localhost:3000/pizzas' } so our whole application will consume this by name api which provide in app.module.ts in providers:[ ]  so there is 4 different types of providers like useValue we will se in next commits


  constructor(
    private http:HttpClient,
  ) {}

  getFood(): Observable<any> {
    return this.http.get(this.api)
    .pipe(
      tap(response => console.log("service",response)),
      catchError((error: any) => throwError(error))
    )
  }
}