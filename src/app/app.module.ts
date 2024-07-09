import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//custom directives
import { MyForDirective } from './my-for/my-for.directive';



//customes pipes
import { FileSizePipe } from './filesize.pipe';


@NgModule({
  declarations: [
    AppComponent,

    MyForDirective
   

    FileSizePipe

  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
