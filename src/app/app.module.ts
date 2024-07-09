import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//http module
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes} from '@angular/router';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';
import { StockInventoryService } from './stock-inventory/services/stock-inventory.service';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';
//import stock-inventory module where Reactive forms import

@NgModule({
  declarations: [
    AppComponent,

    MyForDirective
   

    FileSizePipe

  ],
  imports: [
    BrowserModule,
    StockInventoryModule,
   
  ],
  providers: [StockInventoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
