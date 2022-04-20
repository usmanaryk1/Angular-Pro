
//custom directive almost like a component directive but the only dirffrence is in directive we can't declear template and [] used for selector like selector:'[credit-card]' then use credit-card selector in input like we use conditional *ngIf directive 
import { Directive, ElementRef } from "@angular/core"; // ElementRef 

@Directive({
    selector:'[credit-card]'//because we use credit-card attribute in <input credit-card in app.component.ts> so we need here [] attribute selector so this is essentially a query selector and if you wana select something in plane javaScript we use [] to do know infact it is a attribute
})

export class CreditCardDirective{
    //when you create custom directive you probabely going to talk to the particular dom node in our case using the <input credit-card >in app.component via a directive name (credit-card) now the way we are doing this is injection ElementRef in the constructor to talk to the node element
    constructor(private element:ElementRef){ 
        console.log(this.element);
        
    }
}