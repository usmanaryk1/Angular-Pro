import { Component, OnInit } from '@angular/core';
import { FileSizePipe } from './filesize.pipe';

//custom pipe file object interface
interface File {
  name: string,
  size: number,
  type: string
}

//custom pipe FileMaped object interface
interface FileMaped {
  name: string,
  size: any,//change due to not sure what comes in filter
  type: string
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
  

  custom directive almost like a component directive but the only dirffrence is in directive we can't declear template and [] used for selector like selector:'[credit-card]' then use credit-card selector in input like we use conditional *ngIf directive 

  custom Pipes almost like a component directive and gives name:'anyname-which-is-used-in-template with | anyName'  

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



  
  <div *ngFor="let file of mapped">
    <p>{{ file.name }}</p>
    <p>{{ file.size }}</p> <!-- set ' mb' filter | filesize: value from JavaScript and then show in html  -->
  </div>


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

  make our own custome pipes and lets see how does it works.
  Use pipe in javascript and then show in html so in html we don't need to use |filesize pipe.
  Also provide FileSizePipe in provider if wana use in js.
  set ' mb' filter | filesize: value from JavaScript and then show in html.
  1-import the pipe
  2-register it on the component
  3-dependency inject it on the particular component
  4-mapping and transform the data in js inside this component which actually reaches to template where show this piped value which chaged in is already
  </pre>

  `,
  //Register this pipe to the component using the providers and dependency inject it inside the constructor means provide FileSizePipe in provider for this component if wana use in js
  providers:[
    FileSizePipe
  ]
})
export class AppComponent implements OnInit {

  //dependency inject it inside the constructor
  constructor(private fileSizePipe:FileSizePipe){}
 
  files: File[] = [];//initializer =[]
  mapped: FileMaped[] = [];//initializer =[]
  ngOnInit() {

    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' }
    ];

    this.mapped= this.files.map( file =>{
      return {
        name:file.name,
        size:this.fileSizePipe.transform(file.size, ' mb'),//if second argument ' mb' not given then in fileSizePipe file default given 'MB' will show 
        type:file.type
      }
    })
  }

}
