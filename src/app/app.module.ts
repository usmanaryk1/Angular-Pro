import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//http module
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes} from '@angular/router';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';
import { ExampleOneComponent } from './one/one.component';

import { ExampleTwoComponent } from './two/two.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
