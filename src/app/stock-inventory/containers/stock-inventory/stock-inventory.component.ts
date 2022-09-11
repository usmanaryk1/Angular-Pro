import { Component } from "@angular/core";

import { FormControl, FormGroup, FormArray } from '@angular/forms'

@Component({
    selector:'stock-inventory',
    styleUrls:['stock-inventory.component.scss'],
    template:`

    <div class="stock-inventory" >
    
    <form [formGroup]="form" (ngSubmit)="onSubmit()"> 

    <div formGroupName="stock">
    <input formControlName="branch">
    <input formControlName="code">
    </div>

    <button type="submit" >Submit</button>
    </form>

    {{form.value | json }}

    
    </div>

    `
})

export class StockInventoryComponent{
   
    form = new FormGroup({
        stock: new FormGroup({
            branch:new FormControl('B182'),
            code:new FormControl('1234')
        })
    })

    onSubmit(){
        console.log(this.form.value);
        
    }
}