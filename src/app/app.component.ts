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
  
  custom Pipes almost like a component directive and gives name:'anyname-which-is-used-in-template with | anyName'  
  <br><br><br>

  <div>

  
  <div *ngFor="let file of mapped">
    <p>{{ file.name }}</p>
    <p>{{ file.size }}</p> <!-- set ' mb' filter | filesize: value from JavaScript and then show in html  -->
  </div>

  </div>

  <pre>
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
