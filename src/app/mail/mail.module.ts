import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';

//resolver preloading data
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';
import { MailService } from './mail.service';

export const ROUTES: Routes = [
  { path: 'folder/:name', 
  component: MailFolderComponent,
  // resolve preload data before you have navigated to a particular routed component
  //1-give resolve option here in route path
  //2- make mail-folder.resolve.ts resolver and call service for preload data 
  //3- call this resolve messages property down from mail-folder.component.ts like messages$: Observable<Mail[]> = this.route.data.pipe(map(x=> x.messages));
  resolve: {//preloading data called resolver and also can use guards alternativlly to prefetch data like in ngrx store
    messages: MailFolderResolve // property name is message and value is a MailFolderResolve .ts file where resolver call the service for the data
  }
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
    MailItemComponent
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
