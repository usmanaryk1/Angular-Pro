import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap , catchError} from 'rxjs/operators';

import { HttpClient } from "@angular/common/http";
//import InjectionToken alias of 'api'
import { API_TOKEN } from './token';


@Injectable()
export class FoodService {

//use useValue in provider { provide: 'api', useValue: 'http://localhost:3000/pizzas' } so our whole application will consume this by name api which provide in app.module.ts in providers:[ ]  so there is 4 different types of providers total like one use here useValue we will see others 3 in next commits
// inject useValue provide string type DI token in constructor to use it as DI
// @Inject('api') private api: string

  constructor(
    private http:HttpClient,
    // inject our api with @decarator
    //previous that was hard coded now it is a injectiontoken alias/instence of 'api'
    @Inject(API_TOKEN) private api: string, //useValue provide string type DI token here
  ) {}

  getFood(): Observable<any> {
    return this.http.get(this.api)
    .pipe(
      tap(response => console.log("service",response)),
      catchError((error: any) => throwError(error))
    )
  }
}