import { Component, OnInit } from '@angular/core';

import {Product} from '../../../models/product';

import {ProductService} from '../../../services/product.service';

import {ToastrService} from 'ngx-toastr';
import { format } from 'path';
import { element } from 'protractor';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productlist:Product[];

  constructor(private productService:ProductService, private toastr:ToastrService) { }

  ngOnInit(){
    return this.productService.getProducts().snapshotChanges().subscribe(items=>{
      this.productlist = [];
      items.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.productlist.push(x as Product);
      });
    });
  }
  onEdit(product:Product){
    this.productService.selectedProduct = Object.assign({}, product)
  }

  onDelete($key:string){
    if (confirm('Are you sure you want to delete it')) {
      this.productService.deleteProduct($key);
      this.toastr.warning('Deleted Successfulyy', 'Product Removed');
    }
  }

}
