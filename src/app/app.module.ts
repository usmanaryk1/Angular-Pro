import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import stock-inventory module where Reactive forms import
import { StockInventoryModule } from './stock-inventory/containers/stock-inventory.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StockInventoryModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
