import { Component } from "@angular/core";
import { myService } from "../services/my.service";
@Component({
    selector:"first",
    templateUrl:"./first.component.html"
})
export class firstComponent{
    public result:any;
    constructor(private obj:myService){}
    ngOnInit(){
        this.result = this.obj.getAllProducts();
    }
}