import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router} from '@angular/router';
import { UserService} from '../services/user.service';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-running-auction-back',
  templateUrl: './running-auction-back.component.html',
  styleUrls: ['./running-auction-back.component.css']
})
export class RunningAuctionBackComponent implements OnInit {
  products: object;
  users:object;
  winnerId : object;
  involvedUsers : any = [];
  private socket: any; 
  constructor(
    private productService: ProductService,
    private userService:UserService
  ) {
    this.socket  = socketIo('http://localhost:3000');
   }

  ngOnInit() {
    this.userService.getAllUsersById().subscribe(data=>{
      this.users = data;
      // console.log(this.users);
  });
  this.socket.on('newbid', (data) => {
    this.getAllproduct();
  })  
  
  this.getAllproduct(); 
  }

  getAllproduct(){
    this.productService.getAllrunningProduct().subscribe(data=>{
      this.involvedUsers.bidders = [];
      this.involvedUsers.user_details = [];
    data.forEach((item, index) => {
      var lastBidprice = item.bid_amount;
      var lastBiduser = '';
      var lastBidTime = '';
      var lastBiduserId = '';

      item.bidders.forEach((bidder, i) => {
        //console.log(bidder);
        if(bidder.amount >= lastBidprice){
           lastBidprice = bidder.amount;
           lastBiduser = this.users[bidder.user_id].name;
           lastBiduserId = this.users[bidder.user_id]._id;
           lastBidTime = bidder.date_time;
        }
      });
      data[index].lastBidprice = lastBidprice;
      data[index].lastBiduser = lastBiduser;
      data[index].lastBidTime = lastBidTime;
      data[index].lastBiduserId = lastBiduserId;
    });
    this.products = data;
  });
  }
  updateInvolved(product){
    this.involvedUsers = product;
    // console.log(this.involvedUsers);
  }
  timeOver(){
    this.getAllproduct(); 
  }
}
