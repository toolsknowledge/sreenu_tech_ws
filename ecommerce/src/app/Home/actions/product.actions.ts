import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";
export enum ProductActions{
    ProductsLoading = "[Product] Loading",
    ProductsLoadingSuccess = "[Product] Loading Success",
    ProductsLoadingFail = "[Product] Loading Fail"
}
export class ProductsLoading implements Action{
     public readonly type = ProductActions.ProductsLoading;
}
export class ProductsLoadingSuccess implements Action{
    public readonly type = ProductActions.ProductsLoadingSuccess;
    constructor(public products:Product[]){}
};
export class ProductsLoadingFail implements Action{
    public readonly type = ProductActions.ProductsLoadingFail;
    constructor(public err:string){}
};
export type ProductActionTypes = ProductsLoading | ProductsLoadingSuccess | ProductsLoadingFail;

