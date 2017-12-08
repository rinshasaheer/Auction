import { Component, OnInit } from '@angular/core';
import { product } from './../schema/product';
import { ProductServiceService } from './../services/product-service.service';
import * as socketIo from 'socket.io-client';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from 'protractor';

@Component({
  selector: 'app-myauctions',
  templateUrl: './myauctions.component.html',
  styleUrls: ['./myauctions.component.css']
})
export class MyauctionsComponent implements OnInit {

  products: Array<product>;    
  existStatus: boolean = false;  
  private socket: any; 
  
  constructor(private _productService: ProductServiceService) { 
    this.socket = socketIo('http://192.168.1.99:3000')
    
  }

  ngOnInit() {
    this.loadAuctions();
    this.socket.on('newbid', (data) => {
      console.log(data);
      this.products.forEach(function(item, index, object){
        if(item._id == data){
          object.splice(index, 1);
        }
      })
      this.loadAuctions();
    })
  }

  loadAuctions(){
    this._productService.loadMyAuctionProduct()
    .subscribe(resProducts => {
      this.products = resProducts;
      console.log(resProducts);
      if(resProducts.length > 0){
        this.existStatus = true;
      }
    });
  }
}
