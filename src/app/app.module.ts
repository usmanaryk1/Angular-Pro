import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleOneComponent } from './one/one.component';
import { ExampleThreeComponent } from './three/three.component';
import { ExampleTwoComponent } from './two/two.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
