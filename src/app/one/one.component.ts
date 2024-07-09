import { Component, Input , ChangeDetectionStrategy} from "@angular/core"; 

@Component({
    selector: 'example-one',
    // onpush is the great method to speed up our applications which things like stateless presentational/dumb component 
    //in real world application stateless component doesn't typically have local state or doesn't update local state to the parent directally it will emit an event via output and eventEmitter which is not use here yet but for example in form component we make changing and update it via output/eventEmitter to parent/smart component 
    //so the main concept here is the use immutable data structure along side the onpush changeDection strategy to make your change detection an application code much faster 
  changeDetection: ChangeDetectionStrategy.OnPush, //stateless/dumb component not change on single property change/add every time but only change when whole user object change
    styles: [`
    .example-one {
      font-size: 19px;
      margin-bottom: 10px;
    }
  `],
  template: `
    <div class="example-one">
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}
      
      <button (click)="update()">Internal update</button> 
      <p>* should not update</p>
    </div>
  `
  })
  export class ExampleOneComponent {
    @Input()
    user:any;

  update() {
    this.user.name = 'Matt Skiba';//when update all component change both onpush and default strategy
  }
  }
  