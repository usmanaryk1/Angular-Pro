import { Component, OnInit } from '@angular/core';

//custom pipe file object interface
interface File {
  name: string,
  size: number,
  type: string
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
  
  custom Pipes almost like a component directive and gives name:'anyname-which-is-used-in-template with | anyName'  
  <br><br><br>

  <div>

  
  <div *ngFor="let file of files">
    <p>{{ file.name }}</p>
    <p>{{ file.size | filesize }}</p> <!-- create a custome pipe(like a |date pipe etc..) to transform the size in MB because size is comig in bytes -->
  </div>

  </div>

  <pre>
  make our own custome pipes and lets see how does it works
  </pre>

  `
})
export class AppComponent implements OnInit {
 
  files: File[] = [];//initializer =[]
  ngOnInit() {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' }
    ];
  }

}
