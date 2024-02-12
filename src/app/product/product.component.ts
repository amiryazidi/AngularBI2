import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  priceMax!:number;
  listProduct:Product[]=[
    {id:1,title:"Iphone 12",price:1000,quantity:10,like:0},
    {id:2,title:"Iphone 13",price:1500,quantity:5,like:0},
    {id:3,title:"Iphone 14",price:2000,quantity:2,like:0},
  ]


  increment(p:number){
    this.listProduct[p].like++;
  }
  buy(p:number){
    this.listProduct[p].quantity--;
  }
}
