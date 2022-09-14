import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//http module
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';

export const ROUTES: Routes = [
   //lazzy Loading 
   {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }, 

  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MailModule,
  
    RouterModule.forRoot(ROUTES)//{ enableTracing: true } tracing is for debuging that where is the router is navigating show everythis in console
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
