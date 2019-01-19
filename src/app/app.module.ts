import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { MyProdComponent } from './my-prod/my-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    MyProductsComponent,
    MyProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
