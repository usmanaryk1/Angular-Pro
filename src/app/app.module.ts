import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//http module
import { HttpClientModule } from '@angular/common/http';

import { PizzaViewerComponent } from './containers/pizza-viewer.component';
import { DrinkViewerComponent } from './containers/drink-viewer.component';
import { SideViewerComponent } from './containers/side-viewer.component';

import { AppComponent } from './app.component';
//import InjectionToken alias of 'api'
import { API_TOKEN } from './token';

@NgModule({
  declarations: [
    AppComponent,
    PizzaViewerComponent,
    DrinkViewerComponent,
    SideViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [
    AppComponent
  ],

  //providers and useValue
  //Use the Value Provider useValue, when you want to provide a simple value.The Angular will injects whatever provided in the useValue as it is.providers :[ {provide:'USE_FAKE', useValue: true}] in service constructor(@Inject('USE_FAKE') public useFake: string) {}
  //provide is then registering(means setup global injectable) the string token('api') and saying when we actually requested so gives us a value of api/pizzas so this is allows us to configure things at the root directory which we allows us to injecting to our services to all components   
 
//   providers: [ 
//     {provide: API_TOKEN, useValue:'http://localhost:3000/pizzas'},
//     // {provide: 'api', useValue:'http://localhost:3000/pizzaszzz'},//gives error this is hapening just because of naming conflict(we give name both of then as 'api') so we use injectionToken which is allows us to pass a string into the new instence of injection token
// ]

//https://www.tektutorialshub.com/angular/angular-providers/ for detail of DI Token
//How to register dependencies using the Angular Providers
//this is called providers Array==> providers: [ {1-called Provide==> provide: 'api'<==(DI Token), 2-called Provider==> useValue: '/api/pizzas' } ]

//1-Provide==> The first property is Provide holds the Token or DI Token. The Injector uses the token to locate the provider in the Providers array. The Token can be either a type, a string or an instance of InjectionToken. Type token==>providers :[{ provide: ProductService, useClass: ProductService }] in service==>constructor(private productService : ProductService ) {}, string token==>{provide:'PRODUCT_SERVICE', useClass: ProductService } or {provide:'USE_FAKE', useValue: true } or {provide:'APIURL', useValue: 'http://SomeEndPoint.com/api' } in service==>constructor(@Inject('PRODUCTSERVICE') private prdService:ProductService,@Inject('APIURL') private apiURL:string ){}, Injection Token==>first export const API_URL= new InjectionToken<string>(''); then { provide: API_URL, useValue: 'http://SomeEndPoint.com/api' } in service constructor(@Inject(API_URL) private apiURL: string)

//2-Provider==> The second property is the Provider definition object. It tells Angular how to create the instance of the dependency.
//Types of Provider 
// 2.1-Class Provider : useClass  //its a service which everybody usually use like providers:[ProductService]//Use the Class Provider useClass, when you want to provide an instance of the provided class.providers :[{ provide: ProductService, useClass: ProductService }] so The Angular Provides a shortcut in cases where both token & class name matches as follows providers: [ProductService] , Switching Dependencies=>You can provide a mock/Fake class for Testing purposes as shown.providers :[{ provide: ProductService, useClass: fakeProductService }]
// 2.2-Value Provider: useValue  //Use the Value Provider useValue, when you want to provide a simple value.The Angular will injects whatever provided in the useValue as it is.providers :[ {provide:'USE_FAKE', useValue: true}] in service constructor(@Inject('USE_FAKE') public useFake: string) {}
// 2.3-Factory Provider: useFactory //We usually use the useFactory when we want to return an object based on a certain condition. The Factory Provider useFactory expects us to provide a function. It invokes the function and injects the returned value. We can also add optional arguments to the factory function using the deps array. The deps array specifies how to inject the arguments. providers: [ { provide: LoggerService, useClass: LoggerService },{ provide: 'USE_FAKE', useValue: true },{provide: ProductService,useFactory: (USE_FAKE, LoggerService) =>USE_FAKE ? new FakeProductService() : new ProductService(LoggerService),deps: ['USE_FAKE', LoggerService]}]
// 2.4-Aliased Class Provider: useExisting //Use Aliased Provider useExisting when you want to use the new provider in place of the old Provider.{ provide: ProductService, useExisting: NewProductService },{ provide: NewProductService, useClass: NewProductService },


})
export class AppModule {}
