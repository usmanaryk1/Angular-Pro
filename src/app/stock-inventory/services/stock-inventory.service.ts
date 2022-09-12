import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map, tap} from "rxjs/operators";

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

// import { Product, Item } from '../models/product.interface';
import { Observable, of, throwError, } from 'rxjs';

@Injectable()
export class StockInventoryService {
  private api = "http://localhost:3000";
  constructor(
    private http: HttpClient
  ) {}

  getCartItems(): Observable<any> {
    return this.http
      .get(this.api+'/cart').pipe(
      // map((response: any) => response.json()),
      catchError((error: any) => throwError(error.json()))
      )
  }

  getProducts(): Observable<any> {
    return this.http
      .get(this.api +'/products')
      .pipe(
        // map((response: any) => response.json()),
        catchError(err => {
            console.log('caught mapping error and rethrowing', err);
            return throwError(err);
      })
      // .pipe(catchError(this.handleError))
      // .map((response: Response) => response.json())
      // .catch((error: any) => Observable.throw(error.json()));
  )}



  
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}