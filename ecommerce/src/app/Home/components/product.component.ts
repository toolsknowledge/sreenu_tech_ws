import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { SpinnerVisibilityService } from "ng-http-loader";
import { ProductsLoading } from "../actions/product.actions";
import { Product } from "../model/product.model";
import { IState } from "../reducer/product.reducer";
import { allProducts } from "../selector/product.selector";

@Component({
    selector:"product",
    templateUrl:"./product.component.html"
})
export class productComponent{
    result:any;
    loading:boolean;
    products:Product[];
    error:string;
    constructor(private store:Store<IState>,
                private spinner:SpinnerVisibilityService){
            
    }
    ngOnInit(){
        this.store.dispatch(new ProductsLoading());

        this.result = this.store.pipe(select(allProducts));

        this.spinner.show();
        this.result.subscribe((res)=>{
            this.loading = res.loading;
            this.products = res.products;
            this.error = res.error;
        });
    }
}