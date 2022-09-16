import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap , catchError} from 'rxjs/operators';

import { HttpClient } from "@angular/common/http";


@Injectable()
export class FoodService {

// 2.3-Factory Provider: useFactory //We usually use the useFactory when we want to return an object based on a certain condition. The Factory Provider useFactory expects us to provide a function. It invokes the function and injects the returned value. We can also add optional arguments to the factory function using the deps array. The deps array specifies how to inject the arguments. providers: [ { provide: LoggerService, useClass: LoggerService },{ provide: 'USE_FAKE', useValue: true },{provide: ProductService,useFactory: (USE_FAKE, LoggerService) =>USE_FAKE ? new FakeProductService() : new ProductService(LoggerService),deps: ['USE_FAKE', LoggerService]}]
  constructor(
    private http:HttpClient,
    //dynamically injuct a injuction @Inject() from component provider useFactory
    @Inject(String) private api:string,//comes from useFactory from individually component dymanically like /drinks or /pizzas or /sizes //useFactroy allow us to dynamically pass our api in (in service this.api)  which we then be use of new instence of our FoodService is actually given 
    ) {
      console.log("this.api",this.api);
      
    }

  getFood(): Observable<any> {
    return this.http.get(this.api)
    .pipe(
      tap(response => console.table(response)),
      catchError((error: any) => throwError(error))
    )
  }
}