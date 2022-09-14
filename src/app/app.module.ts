import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//http module
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes} from '@angular/router';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';
//import guards
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';


export const ROUTES: Routes = [
   //lazzy Loading 
   {
     path: 'dashboard',
     // user = { isAdmin: false }; uncommit this from authService then dashboard will not work even clicking means authGuard working means no permission because isAdmin:false
     canLoad: [AuthGuard],//specific to the lazy load canLoad this particular module means permission if user has a permission to load or is user admin
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
    AuthModule,
  
    RouterModule.forRoot(ROUTES)
  ],
  providers:[ 
    AuthService,
    //use guard for permission to load module
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
