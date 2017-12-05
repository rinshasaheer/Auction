import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-closed-auction-back',
  templateUrl: './closed-auction-back.component.html',
  styleUrls: ['./closed-auction-back.component.css']
})
export class ClosedAuctionBackComponent implements OnInit {
  products: object;
  winnerId : object;
  involvedUsers : any = [];
  constructor(
     private productService: ProductService
  ){ }


  ngOnInit() {
    this.productService.getAllClosedProduct().subscribe(data=>{
     
      data.forEach((item, index) => {
        var lastBidprice = item.bid_amount;
        var lastBiduser = '';
        var lastBidTime = '';

        item.bidders.forEach((user, i) => {
          if(user.amount >= lastBidprice && user.bid_status != "rejected"){
             lastBidprice = user.amount;
             lastBiduser = item.user_details[i].name;
             lastBidTime = user.date_time;
          }
        });
        data[index].lastBidprice = lastBidprice;
        data[index].lastBiduser = lastBiduser;
        data[index].lastBidTime = lastBidTime;
      });
      console.log(data);
      this.products = data;
    });
  }

  updateInvolved(product){
    this.involvedUsers = product.bidders
    console.log(this.involvedUsers);
  }

}
