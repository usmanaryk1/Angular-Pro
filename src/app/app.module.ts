import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//http module
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes , PreloadingStrategy, Route } from '@angular/router';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';
import { Observable, of } from 'rxjs';

//custom preload class 
export class CustomPreload implements PreloadingStrategy{
  preload(route:Route, fn:()=> Observable<any>): Observable<any>{//preload comes from implements PreloadingStrategy
    return route.data && route.data.preload ? fn() : of(null); //check if data objeck available and also have property preload then return a function otherwise return our own observable null
  }
} 

export const ROUTES: Routes = [
   //lazzy Loading 
   {
     path: 'dashboard',
     //implement CustomPreloading
    data:{ preload:true },//also need to add data object for custome preload and true the property preload and if preload:false then module will not preload 
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
  
    RouterModule.forRoot(ROUTES , { preloadingStrategy : CustomPreload } )//customPreload for our own choice which one module should be preload //preload all our modules even it is lazyload //{ enableTracing: true } tracing is for debuging that where is the router is navigating show everythis in console
  ],
  providers:[ 
    //also need to provide custom class CustomPreload
    CustomPreload
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
