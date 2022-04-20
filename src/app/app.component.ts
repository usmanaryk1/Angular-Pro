import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
  
  custom directive almost like a component directive but the only dirffrence is in directive we can't declear template and [] used for selector like selector:'[credit-card]' then use credit-card selector in input like we use conditional *ngIf directive 
  <br><br><br>

  <div>

    <label>
      Credit Card Number
      <input 
        name="credit-card" 
        type="text"
        placeholder="Enter your 16-digit card number"
        credit-card>
    </label>
  </div>

  <pre>
  create custome directive and set the rules/validation for credit card number in input 
  1- automatic formate means space after every 4 digit 
  2- 16 digit should total get rid of extra digit 
  3- only number allow in the input 
  4- if write later like name border should red
  </pre>

  `
})
export class AppComponent {
  
}
