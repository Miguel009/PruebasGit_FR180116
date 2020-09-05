import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Crud1Component } from './crud1/crud1.component';
import {FormsModule} from '@angular/forms';
import { Crud2Component } from './crud2/crud2.component';
@NgModule({
  declarations: [
    AppComponent,
    Crud1Component,
    Crud2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
