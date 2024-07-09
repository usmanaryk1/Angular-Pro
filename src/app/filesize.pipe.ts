import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'filesize'// custome pipe name 
})

export class FileSizePipe implements PipeTransform {//export like a component and declear in app.component.ts and implement a pipeTransform 
    transform(size:number, extension:string='MB') {//its a builtin pipeTransform method
        console.log(size,extension);
        return (size/(1024*1024)).toFixed(2) + extension ;
        
    }
}