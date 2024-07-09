import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
  <div>

      <button (click)="addProp()">Add property</button>  <!-- add property which dosen't exist -->
      <button (click)="changeUser()">Change user object</button> <!-- by changing the whole object then stateless component onpush stategy object effected/change --> 
      <button (click)="changeName()">Change name property</button> <!-- change the existing property which does not effect(stateless component) the onpush strategy  -->

      <br>
      in exanple one component=><br>
      onpush is the great method to speed up our applications which things like stateless presentational/dumb component <br>
      in real world application stateless component doesn't typically have local state or doesn't update local state to the parent directally it will emit an event via output and eventEmitter which is not use here yet but for example in form component we make changing and update it via output/eventEmitter to parent/smart component <br>
      so the main concept here is the use immutable data structure along side the onpush changeDection strategy to make your change detection an application code much faster <br>
      
      <div class="users">
        <example-one [user]="user"></example-one> <!-- stateless/dumb component onpush srtategy (only change when whole object change at once not only single property change/add)-->
        <example-two [user]="user"></example-two> <!-- also stateless component default strategy but change on every time event single property change/add in object -->
      </div>
  
   </div>

`
})
export class AppComponent  {

  user: any = {
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  };

// only add email in bydefault strategy example two component
  addProp() {
    this.user.email = 'blink@blink-182.net';
  }

// only change the bydefault strategy example two component
  changeName() {
    this.user.name = 'Travis Barker';
  }

  //change user and change both onpush(example one component) and bydefault(example two component) stratigy   
  changeUser() {
    this.user = {
      name: 'Tom Delonge',
      age: 41,
      location: 'California'
    };
  }

}
