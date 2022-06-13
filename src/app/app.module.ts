import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//custom directives
import { MyForDirective } from './my-for/my-for.directive';



@NgModule({
  declarations: [
    AppComponent,
    MyForDirective
   

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
