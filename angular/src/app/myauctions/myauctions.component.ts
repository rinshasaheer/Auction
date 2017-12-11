import { Component, OnInit } from '@angular/core';
import { product } from './../schema/product';
import { ProductServiceService } from './../services/product-service.service';
import * as socketIo from 'socket.io-client';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from 'protractor';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-myauctions',
  templateUrl: './myauctions.component.html',
  styleUrls: ['./myauctions.component.css']
})
export class MyauctionsComponent implements OnInit {

  products = [];    
  existStatus: boolean = false;  
  private socket: any; 
  authUser: any;
  // productsx: object;
  users:object;
  constructor(private _productService: ProductServiceService, private userService: UserService, private router: Router) { 
    this.socket = socketIo('http://192.168.1.99:3000')
    
  }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="user"){
        this.router.navigate(['/login']);
      }
    });
    this.loadAuctions();
    this.socket.on('newbid', (data) => {
      // console.log(data);
      // console.log('mycll');
      this.products.forEach(function(item, index, object){
        if(item._id == data){
          object.splice(index, 1);
        }
      });
      
      
      this.loadAuctions();
    })
    this.socket.on('closebid', (data) => {
      console.log(data);
    
      this.loadAuctions();
    })
  }

  loadAuctions(){
    this.loadUserId();
    this._productService.loadMyAuctionProduct()
    .subscribe(resProducts => {
     // this.products = resProducts;
      console.log('fetch all my product');
      console.log(resProducts);
      let temp =[];
      resProducts.forEach((item, index) => {
        var lastBidprice = item.bid_amount;
        //var lastBiduser = '';
        var lastBidTime = '';
        var lastBiduserId = '';
  
        item.bidders.forEach((bidder, i) => {
          //console.log(bidder);
          if(bidder.amount >= lastBidprice && bidder.bid_status != "rejected"){
             lastBidprice = bidder.amount;
            // lastBiduser = this.users[bidder.user_id].name;
             lastBiduserId = bidder.user_id;
             lastBidTime = bidder.date_time;
          }
        });
        resProducts[index].lastBidprice = lastBidprice;
      //  resProducts[index].lastBiduser = lastBiduser;
        resProducts[index].lastBidTime = lastBidTime;
        resProducts[index].lastBiduserId = lastBiduserId;
        
        if(this.authUser.id == lastBiduserId){
          temp.push(resProducts[index]);
        }
       
      });
    //  console.log(temp);
      this.products = temp;
      if(this.products.length > 0){
        this.existStatus = true;
      }
    });
  }

  loadUserId(){
    this.authUser = JSON.parse(localStorage.getItem('user'));
    return this.authUser.id;
  }
}
