import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//http module
import { HttpClientModule } from '@angular/common/http';

import { PizzaViewerComponent } from './containers/pizza-viewer.component';
import { DrinkViewerComponent } from './containers/drink-viewer.component';
import { SideViewerComponent } from './containers/side-viewer.component';

import { AppComponent } from './app.component';

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

  //providers is declearing in the individualy in the containers component one by one
  //next commits we will see the 4 types of provider like useValue, useClass , useFactory and useExisting one by one
  providers: [ ]

})
export class AppModule {}
