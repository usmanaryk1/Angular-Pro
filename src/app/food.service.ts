import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap , catchError} from 'rxjs/operators';

import { HttpClient } from "@angular/common/http";


@Injectable()
export class FoodService {

  constructor(
    private http:HttpClient,
     ) {}
    getSides(): Observable<any> {
      return this.http.get('http://localhost:3000/sides')
      .pipe(
        tap(response => console.table(response)),
        catchError((error: any) => throwError(error))
      )
    }
    getPizzas(): Observable<any> {
      return this.http.get('http://localhost:3000/pizzas')
      .pipe(
        tap(response => console.table(response)),
        catchError((error: any) => throwError(error))
      )
    }
    getDrinks(): Observable<any> {
      return this.http.get('http://localhost:3000/drinks')
      .pipe(
        tap(response => console.table(response)),
        catchError((error: any) => throwError(error))
      )
    }


}