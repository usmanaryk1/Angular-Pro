import { Component } from "@angular/core";

@Component({
    selector:'stock-inventory',
    styleUrls:['stock-inventory.component.scss'],
    template:`

    <div class="stock-inventory" >
    <pre>
    Setup the Reactive forms. 
    1-make stock-inventory folder.
    2-make Smart/container/statefull component inside stock-inventory folder (Smart/container/statefull component communicate with services and render child components)
    3-inside containers make stock-inventory module and inport it in app.module.ts
    4-inside Smart/containers/statefull folder make another stock-inventroy folder 
    5-make stock-inventory.component.ts and stock-inventory.component.scss file in stock-inventery/containers/stock-inventery folder 
    </pre>

    <pre>
    
    1-main folder
        1.1-containers folder => (Smart/container/statefull component communicate with services and render child components)
        1.2-components folder => (Dump/containers/stateless component Accept data via inputs and Emit data changes via event output (see commit here in code what is used)<!-- (@output and name:EventEmitter<any> = new EventEmitter() and this.name.emit()) ) -->
        1.3-models folder => this main filder classes will be  models folder
        1.4 module.ts of this main folder => and import this module in app.module.ts for working this module
    
    2-main folder
        2.1-containers folder => (Smart/container/statefull component communicate with services and render child components)
        2.2-components folder => (Dump/containers/stateless component Accept data via inputs and Emit data changes via event output (see commit here in code what is used)<!-- (@output and name:EventEmitter<any> = new EventEmitter() and this.name.emit()) ) -->
        2.3-models folder => this main filder classes will be  models folder
        2.4 module.ts of this main folder => and import this module in app.module.ts for working this module
    3-app.component.ts
    4-app.module.ts

    </pre>
    
    </div>

    `
})

export class StockInventoryComponent{

}