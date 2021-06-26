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


const productReducer = (state=initialState,actions:ProductActionTypes):IState=>{
    switch(actions.type){
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
                products:actions.products,
                error:""
            }
        case ProductActions.ProductsLoadingFail:
            return{
                ...state,
                loading:true,
                products:[],
                error:actions.err
            }

        default:
            return state;
    }
};

export default productReducer;




