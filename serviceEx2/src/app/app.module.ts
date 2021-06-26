import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { loginComponent } from './components/login.component';

@NgModule({
  declarations: [
    AppComponent,
    loginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [loginComponent]
})
export class AppModule { }
