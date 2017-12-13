import { Component, OnInit } from '@angular/core';
import { product } from './../schema/product';
import { ProductServiceService } from './../services/product-service.service';
import * as socketIo from 'socket.io-client';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from 'protractor';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import { Config } from './../../../config/config'

@Component({
  selector: 'app-myauctions',
  templateUrl: './myauctions.component.html',
  styleUrls: ['./myauctions.component.css']
})
export class MyauctionsComponent implements OnInit {

  product = [];    
  existStatus: boolean = false;  
  private socket: any; 
  authUser: any;
  // productsx: object;
  users:object;
  constructor(private _productService: ProductServiceService, 
    private userService: UserService, 
    private router: Router,
    private config: Config) {

    this.socket = socketIo(config.socketURL)
    
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
      this.product.forEach(function(item, index, object){
        if(item._id == data){
          object.splice(index, 1);
        }
      });
      
      
      this.loadAuctions();
    })
    this.socket.on('closebid', (data) => {
      // console.log(data);
    
      this.loadAuctions();
    })
    // this.socket.on('userbidreject', (data) => {
    //   console.log(data);
    
    //   if(data.u_id == this.loadUserId())
    //   this.loadAuctions();
    // })
    
  }

  loadAuctions(){
    this.loadUserId();
    this._productService.loadMyAuctionProduct()
    .subscribe(resProducts => {
     this.product = resProducts;
    //   console.log('fetch all my product');
    //   console.log(resProducts);
      if(resProducts.length > 0){
        this.existStatus = true;
      }
      this.product = resProducts;
      console.log(this.existStatus);
        let uId = this._productService.loadUserId();
      this.product.forEach((item, index) => {
        var lastBidprice = item.bid_amount;
        var lastBiduser = '';
        var lastBidTime = '';
        var lastBiduserId = '';
        var bidstatus = '';
        var bgClr = '';
        let mybid = [];
        item.bidders.forEach((bidder, i) => {
          // console.log(bidder);
          if(bidder.amount >= lastBidprice && bidder.bid_status != 'rejected'){
             lastBidprice = bidder.amount;
            //  lastBiduser = this.users[bidder.user_id].name;
              lastBiduserId = bidder.user_id;
             lastBidTime = bidder.date_time;
          }
          if(bidder.user_id == uId){
            mybid.push(bidder);
          }
         // if(bidder.bid_status == "rejected")
        });
        if(lastBiduserId  == uId && item.is_bid_completed){
          var bidstatus = 'Winner';
          var bgClr = '#00ab5d';
        }
        if(lastBiduserId  != uId && item.is_bid_completed){
          var bidstatus = 'Participated';
          var bgClr = '#da1515';
        }
        if(lastBiduserId  == uId && !item.is_bid_completed){
          var bidstatus = 'Participated';
          var bgClr = '#00ab5d';
        }
        if(lastBiduserId  != uId && !item.is_bid_completed){
          var bidstatus = 'Participated';
          var bgClr = '#da1515';
        }
        this.product[index].bidstatus = bidstatus;
        this.product[index].mybid = mybid;
        this.product[index].bgClr = bgClr;
        this.product[index].mybid = mybid;
        this.product[index].topbid = lastBidprice;
        this.product[index].lastBiduser = lastBiduser;
        this.product[index].lastBidTime = lastBidTime;
        this.product[index].lastBiduserId = lastBiduserId;
      });
      console.log(this.product);
      
    });
  }

  loadUserId(){
    this.authUser = JSON.parse(localStorage.getItem('user'));
    return this.authUser.id;
  }
}
