import { Component, OnInit, DoCheck, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      Counter: {{ counter }}
    </div>
  `
})
export class AppComponent implements OnInit, DoCheck {
  counter = 0;
  constructor(
    private zone: NgZone //ngZone keep doing task outside of angular synchronouslly
  ) {}
  ngOnInit() {
    this.zone.runOutsideAngular(() => {// there are many zones and runOutsideAngular is one of them
      for (let i = 0; i < 100; i++) {
        setTimeout(() => this.counter++);
      }
      this.zone.run(() => { //if not run then outside of angular it will keep runing and when we do this.zone.run then it comes back and give response/output/result
        setTimeout(() => this.counter = this.counter, 1000);
      });
    });
  }
  ngDoCheck() {
    console.log('Change detection has been run!'); // third time it will log when counter will come back with 100 and show result in template after 1 sec, can see clearly counter will be 0 for one second then it will update to 100 
  }
}
