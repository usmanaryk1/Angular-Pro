import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
  
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

  `
})
export class AppComponent {
  
}
