import { Component, OnInit } from '@angular/core';
import { product } from './../schema/product';
import { ProductServiceService } from './../services/product-service.service';
import * as socketIo from 'socket.io-client';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upcomingauctions',
  templateUrl: './upcomingauctions.component.html',
  styleUrls: ['./upcomingauctions.component.css']
})
export class UpcomingauctionsComponent implements OnInit {

  products: Array<product>;    
  existStatus: boolean = false;
  private socket: any; 
  
  constructor(private _productService: ProductServiceService, private userService: UserService, private router: Router) { 
        this.socket = socketIo('http://localhost:3000')

  }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="user"){
        this.router.navigate(['/login']);
      }
    });
    this.loadAuction();
    this.socket.on('upcomingnewbid', (data) => {
      console.log(data);
      this.loadAuction();
     });
    //  this.socket.on('upcomingnewbid', (data) => {
    //   console.log(data);
    //   this.loadAuction();
    //  })  
  }

  loadAuction(){
    this._productService.loadUpcomingProduct()
    .subscribe(resProducts => {
      this.products = resProducts;
      console.log(resProducts);
      if(resProducts.length > 0){
        this.existStatus = true;
      }
    });
  }
}
