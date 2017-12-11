import { Component, OnInit } from '@angular/core';
import { product } from './../schema/product';
import { ProductServiceService } from './../services/product-service.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-finishedauction',
  templateUrl: './finishedauction.component.html',
  styleUrls: ['./finishedauction.component.css'],
  inputs: ['products']
})
export class FinishedauctionComponent implements OnInit {

  products: Array<product>;
  existStatus: boolean = false;
  private socket: any; 
  
  constructor(private _productService: ProductServiceService, private userService: UserService, private router: Router) { 
    this.socket = socketIo('http://192.168.1.99:3000')
    
  }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="user"){
        this.router.navigate(['/login']);
      }
    });
    // console.log(this.products);
    this.loadAuction();
    // console.log(Date())
    this.socket.on('closebid', (data) => {
      console.log(data);
      this.loadAuction();
     })  
  }



  loadAuction(){
    this._productService.loadClosedProduct()
    .subscribe(resProducts => {
      this.products = resProducts;
      // console.log(resProducts);
      if(resProducts.length > 0){
        this.existStatus = true;
      }
      console.log(this.existStatus);
    });
  }
}
