import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';

//resolver preloading data
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';
import { MailService } from './mail.service';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MailViewResolve } from './components/mail-view/mail-view.resolve';

export const ROUTES: Routes = [
  {
    path:'mail',
    component: MailAppComponent,
    //everything underneeth /mail component in chiledren
    children:[
  //primary router-outlet
  { path: 'folder/:name', 
  component: MailFolderComponent,
  // resolve preload data before you have navigated to a particular routed component
  //1-give resolve option here in route path
  //2- make mail-folder.resolve.ts resolver and call service for preload data 
  //3- call this resolve messages property down from mail-folder.component.ts like messages$: Observable<Mail[]> = this.route.data.pipe(map(x=> x.messages));
  resolve: {//preloading data called resolver and also can use guards alternativlly to prefetch data like in ngrx store
    messages: MailFolderResolve // property name is message and value is a MailFolderResolve .ts file where resolver call the service for the data
  }
},
  //auxiliary name router-outlet
  // 2nd router outlet also use in mail-app and give name like name='pane' and tell here that is a 2nd outlet render with this name like outlet:'pane'

  //alternate way also through js api router.navigate() instead of [routerLink]=""
  //detail will be show here in this commit of detail message with onother resolver in auxiliaary outlets 
  {
    path: 'message/:id', 
    component: MailViewComponent,
    outlet:'pane',
    resolve:{
      message:MailViewResolve
    }
  }
]
}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent,
    MailViewComponent,
  ],
  //provide the service and resolver
  providers: [
    MailService,
    MailFolderResolve,
    //resolver of auxiliary pane outlets
    MailViewResolve
  ],
  exports: [
    MailAppComponent
  ]
})
export class MailModule {}
