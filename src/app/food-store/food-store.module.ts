import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodStoreService } from './food-store.service';
import {  FOOD_STORE_CONFIG, FoodStoreConfig } from './config';
// FOOD_STORE_CONFIG is injection token and FoodStoreConfig is a interface
export const FOOD_PROVIDERS: Provider[] = [
  FoodStoreService // it will be array of services
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // // before making it forRoot config that providers was like this
  // providers:[
  //   FOOD_PROVIDERS,// or FoodStoreService
  //   {provide:FOOD_STORE_CONFIG, useValue:{storeId: 10292,storeToken: 'eca938c99a0e9ff91029dc'}}
  // ]

})
export class FoodStoreModule { 
static forRoot(config: FoodStoreConfig): ModuleWithProviders<FoodStoreModule> { //config is export interface FoodStoreConfig {storeId: number,storeToken: string}
  return {
    ngModule: FoodStoreModule,
    providers: [
      FOOD_PROVIDERS,//array of services
      {provide: FOOD_STORE_CONFIG, useValue: config  } //injection token is FOOD_STORE_CONFIG its a name of new InjectionToken<FoodStoreConfig>('FOOD_STORE_CONFIG');  and useValue is export interface FoodStoreConfig {storeId: number,storeToken: string}
    // by optionally we could use ternary operator useValue: config ? or || {} and if you have more provider we can do like config.storeId etc...
    ]
  };
}
}
