import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
  
  custom directive almost like a component directive but the only dirffrence is in directive we can't declear template and [] used for selector like selector:'[credit-card]' then use credit-card selector in input like we use conditional *ngIf directive 
  <br><br><br>

  <div>

  <!-- 
    <li *ngFor="let item of items; let i= index">
      {{i}} member : {{item.name | json}}
    </li>

    <ng-template ngFor [ngForOf]="items" let-item let-i="index">
      <li>
         {{i}}  member : {{item.name | json}}
      </li>
    </ng-template>
    -->

    Here custom directive make by the name of myFor and myForOf 

    <li *myFor="let item of items; let i= index">
    {{i+1}} member : {{item.name | json}}
  </li>

  <ng-template myFor [myForOf]="items" let-item let-i="index">
    <li>
       {{i+11}}  member : {{item.name | json}}
    </li>
  </ng-template>



  </div>

  <pre>
  make our own ngFor directive and lets see how does it works
  </pre>

  `
})
export class AppComponent {
  items = [{
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  },{
    name: 'Tom Delonge',
    age: 41,
    location: 'California'
  },{
    name: 'Travis Barker',
    age: 41,
    location: 'California'
  }];

  constructor() {
    setTimeout(() => {
      this.items = [...this.items, { name: 'Matt Skiba', age: 40, location: 'California' }];//add one extra object here in item array // can't just push into array simplly because of changeDetection not work in custome directive myForOf thats way ...immutable object and add new object
    }, 2000);
  }

}
