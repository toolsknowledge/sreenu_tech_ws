import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { productIntreceptor } from './Home/intreceptor/product.intreceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:"",
                           loadChildren:()=>import("./Home/module/product.module")
                           .then(obj=>obj.HomeModule)}])
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:productIntreceptor,
    multi:true    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
