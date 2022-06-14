import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//customes pipes
import { FileSizePipe } from './filesize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
