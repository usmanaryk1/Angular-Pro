import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AuthFormComponent } from './auth-form.component';
import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

@NgModule({
    declarations:[
        AuthFormComponent,
        AuthRememberComponent,
        AuthMessageComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ],
    exports:[
        AuthFormComponent,
        AuthRememberComponent,
        AuthMessageComponent
    ],
    //not compile on run time it will compile later on
    entryComponents:[
        AuthFormComponent
    ]
})

export class AuthFormModule{}