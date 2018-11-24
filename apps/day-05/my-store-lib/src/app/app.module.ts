import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyStoreLibModule } from 'my-store-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyStoreLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
