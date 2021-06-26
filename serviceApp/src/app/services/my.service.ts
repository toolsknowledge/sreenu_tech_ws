import { Injectable } from "@angular/core";
@Injectable({
    providedIn : "root"
})
export class myService{
    public getAllProducts():any{
        return {"p_id":111,"p_name":"Shirt","p_cost":10000};
    }
    public getProductById():any{
        return "Product Details Soon...!";
    }
};