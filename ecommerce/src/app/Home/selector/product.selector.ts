import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IState } from "../reducer/product.reducer";

export const allProducts = createSelector(createFeatureSelector<IState>("products"),(state:IState)=>{
    return state;
});