import { Component } from "@angular/core";
import { myService  } from "../services/my.service";
@Component({
    selector:"second",
    templateUrl:"./second.component.html"
})
export class secondComponent{
    public result:any;
    constructor(private obj:myService){}
    ngOnInit(){
        this.result = this.obj.getProductById();
    }
}