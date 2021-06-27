import { ProductActions, ProductActionTypes } from "../actions/product.actions";
import { Product } from "../model/product.model";

export interface IState{
    loading:boolean;
    products:Product[];
    error:string;
};

const initialState:IState = {
    loading:false,
    products:[],
    error:""
}





const productReducer = (state=initialState,action:ProductActionTypes):IState=>{
    switch(action.type){
        case ProductActions.ProductsLoading:
            return{
                ...state,
                loading:false,
                products:[],
                error:""
            }
        case ProductActions.ProductsLoadingSuccess:
            return{
                ...state,
                loading:true,
                products:action.products,
                error:""
            }
        case ProductActions.ProductsLoadingFail:
            return{
                ...state,
                loading:true,
                products:[],
                error:action.err
            }
        default:
            return state;
    }
};
export default productReducer;



