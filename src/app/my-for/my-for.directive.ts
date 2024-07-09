import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[myFor][myForOf]'//attribute directive

})
export class MyForDirective{
    
    @Input()
    set myForOf(collection: any){
        this.view.clear(); //clear the templateView otherwise duplicate previous only new object should add need to clear first then new updated item will embeded
        console.log(collection);
        collection.forEach((item: any, index: any) => {
            this.view.createEmbeddedView(this.template,{
                $implicit:item,
                index
            })            
        });
    }

    constructor(
        private view:ViewContainerRef,
        private template:TemplateRef<any>
    ){}
    
}