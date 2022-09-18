
import { Inject, Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'; 

 import{  catchError, map, tap } from 'rxjs/operators'

import { FOOD_STORE_CONFIG, FoodStoreConfig } from './config';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class FoodStoreService {
  constructor(
    private http: HttpClient,
    @Inject(FOOD_STORE_CONFIG) private config: FoodStoreConfig //manually injection FOOD_STORE_CONFIG and its type FoodStoreConfig
  ) {}

   api:string='http://localhost:3000';

   // Http Options
   //with each request we set the headers with store id, and token
   //So just imagine a big chain of restaurant or store when user places an order it then can go to the correct store
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      id: this.config.storeId.toString(),
      token: this.config.storeToken
    }),
  };

 // HttpClient API get() method => Fetch employees list
 getStore():Observable<any>{
  return this.http
    .get(this.api + '/stores', this.httpOptions)
    .pipe(map((res:any)=> res[0]), catchError(this.handleError));
}


    // Error handling
    handleError(error: any) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(() => {
        return errorMessage;
      });
    }
}
