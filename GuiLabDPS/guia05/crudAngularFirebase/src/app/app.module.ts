import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';

//FIREBASE
import { environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import {ProductService} from './services/product.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { from } from 'rxjs';
import { StudentsComponent } from './components/students/students.component';

import {StudentsService} from './services/students.service'
import { Students } from './models/students';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
      StudentsService,
      ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
