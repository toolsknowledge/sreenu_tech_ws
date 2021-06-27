import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgHttpLoaderModule } from "ng-http-loader";
import { productComponent } from "../components/product.component";
import { productEffects } from "../effects/product.effects";
import productReducer from "../reducer/product.reducer";
import { productService } from "../services/product.service";
@NgModule({
    declarations:[productComponent],
    imports:[CommonModule,
            HttpClientModule,
            StoreModule.forRoot({"products":productReducer}),
            EffectsModule.forRoot([productEffects]),
            NgHttpLoaderModule.forRoot(),
            RouterModule.forChild([{path:"",component:productComponent}])],
    providers:[productService],
    exports:[productComponent]
})
export class HomeModule{}