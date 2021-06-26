import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { firstComponent } from './components/first.component';
import { secondComponent } from './components/second.component';

@NgModule({
  declarations: [
    AppComponent,
    firstComponent,
    secondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [secondComponent]
})
export class AppModule { }
