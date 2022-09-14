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

export const ROUTES: Routes = [
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

  //dynamically route detail render in this commit see in mail-item.component.ts but message detail not show in this commit
  //alternate way also through js api router.navigate() instead of [routerLink]=""
  {
    path: 'message/:id', 
    component: MailViewComponent,
    outlet:'pane'
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
    MailViewComponent
  ],
  //provide the service and resolver
  providers: [
    MailService,
    MailFolderResolve
  ],
  exports: [
    MailAppComponent
  ]
})
export class MailModule {}
