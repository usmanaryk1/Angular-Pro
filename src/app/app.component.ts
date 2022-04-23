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

    <label 
        tooltip="3 digits, back of your card"
        #myTooltip="tooltip"> <!-- tooltip is the custom tooltip directive selector declear here to show and hide (tooltip is assign to the template ref variable)--> 
        Enter your security code 
        <span
          (mouseover)="myTooltip.show()" 
          (mouseout)="myTooltip.hide()"><!-- call methods from custom directive tooltip to show and hide tooltip message-->
          (?)
        </span>
        <input type="text">
      </label>

    <!-- or here is also the tooltip example that can use dynamically howmany time you want-->
    <div 
        tooltip="The message which is wana show"
        #myTool="tooltip"> Hover over the message tooltip 
        <span
          (mouseover)="myTool.show()" 
          (mouseout)="myTool.hide()">(!)
        </span>
    </div>



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
