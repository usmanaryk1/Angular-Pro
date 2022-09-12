import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockInventoryService } from './stock-inventory/services/stock-inventory.service';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';
//import stock-inventory module where Reactive forms import

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StockInventoryModule,
   
  ],
  providers: [StockInventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
