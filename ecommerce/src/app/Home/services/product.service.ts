import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../model/product.model";
@Injectable({
    providedIn:"root"
})
export class productService{
    constructor(private http:HttpClient){}
    public getAllProducts():Observable<Product[]>{
        return this.http.get<Product[]>(`http://localhost:8080/api/products`);
    }
}