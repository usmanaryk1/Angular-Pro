import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//http module
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FoodStoreModule } from './food-store/food-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    
    //configurable ngModule
    //before making forRoot it was just FoodStoreModule
    //Means which particular store will use this module
    FoodStoreModule.forRoot({storeId: 10292,
        storeToken: 'eca938c99a0e9ff91029dc'
      })
   
  ],
  bootstrap: [
    AppComponent
  ]

})
export class AppModule {}
