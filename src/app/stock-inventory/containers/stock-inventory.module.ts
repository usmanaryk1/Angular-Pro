import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import reactive forms
import { ReactiveFormsModule } from '@angular/forms';
//import component
import { StockInventoryComponent } from './stock-inventory/stock-inventory.component';

@NgModule({
    declarations:[
        StockInventoryComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
    ],
//export this component so that we can use in app.component.ts
    exports:[
        StockInventoryComponent
    ]
})

export class StockInventoryModule{}