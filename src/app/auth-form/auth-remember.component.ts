import {Component, Output ,EventEmitter} from '@angular/core'

@Component({
    selector: 'auth-remember',
    template: `
    <div>
        <label>
        <!-- tood moto use "strictNullChecks": false in tsconfig.ts thats way no error accure here is error if use $event.target.checked and in method use type any and boolean not work because of this issue --> 
        <input type="checkbox" (change)="onChecked($event)">
        Keep me logged in
        </label>
    <div>
    
    `
   
})

export class AuthRememberComponent {

    @Output()
    checked:EventEmitter<boolean>= new EventEmitter<boolean>();

    onChecked(value:any){
        // console.log(value.target.checked);
        this.checked.emit(value.target.checked);
    }

}