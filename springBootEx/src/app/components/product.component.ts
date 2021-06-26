import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { SpinnerVisibilityService } from "ng-http-loader";
import { productService } from "../services/product.service";

@Component({
    selector : "products",
    templateUrl : "./products.component.html"
})
export class productComponent{
    public result:any;
    constructor(private service:productService,
                private spinner:SpinnerVisibilityService){}

    ngOnInit(){
        this.spinner.show();
        this.service.getAllProducts().subscribe((posRes)=>{
            this.result = posRes;
            this.spinner.hide();
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
            this.spinner.hide();
        });
    }
}