
//custom directive almost like a component directive but the only dirffrence is in directive we can't declear template and [] used for selector like selector:'[credit-card]' then use credit-card selector in input like we use conditional *ngIf directive 
import { Directive, ElementRef, HostBinding, HostListener, } from "@angular/core"; 

@Directive({
    selector:'[credit-card]'//because we use credit-card attribute in <input credit-card in app.component.ts> so we need here [] attribute selector so this is essentially a query selector and if you wana select something in plane javaScript we use [] to do know infact it is a attribute
})

export class CreditCardDirective{

    @HostBinding('style.border')// this will bind border style of input where credit-card directive available/declear
    border:string='';

     //input is essentily event listener for the host and host is the element(input) where we bound(credit-card) the directive to like event is input where credit-card mention in input
     // if we want to access the $ event, this is ['$event'] array of string which we want to listen to 
     //then create a function and event type which we gona used
     @HostListener('input', ['$event'])
     onKeyDown(event : KeyboardEvent){
         //console.log(event);
         //get the target and assign the type for the value
         const input= event.target as HTMLInputElement;// caste input.target here with the type of HTMLInputElement
        
         //  now get the value and trimed our string so remove the white extra space 
        let trimmed= input.value.replace(/\s+/g,'');//trimmed out any axisting white space

        // change the length if it is above 16 character 
        if(trimmed.length > 16){
            // trim that particular 16 character string if is grater then 16 
            trimmed= trimmed.substring(0,16)//only first 16 character trimmed every time if hit above 16
            console.log(trimmed);
        }

        // create a array called number
        let numbers=[];
        // join with the blanck space after every 4 character=>itterate over the trimmed string and each block of forwe are going to pass it into the numbers array and we are going to join it with the blanck space 
        for (let i = 0; i<trimmed.length; i+=4) {//loop till the length of total 16 character
            numbers.push(trimmed.substr(i,4));//substr deprecated plz find alternat//trimmed after every 4 character //['1234', '5678'] something like that
            console.log(numbers,trimmed);
        }

        // assaign the value back, reassign the value with empty space
        input.value= numbers.join(' ');//every 4 character seprate via a space


        //host binding will change the style of input if any latter try to write
        this.border='';
        if(/[^\d]+/.test(trimmed)){//check if any latter exist with test() method
            this.border='1px solid red'
        }

        

     }

    }

