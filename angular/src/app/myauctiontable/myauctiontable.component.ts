import { Component, OnInit } from '@angular/core';
import { product } from './../schema/product';
import { ProductServiceService } from './../services/product-service.service';
import { SearchPipe } from './../search.pipe';
import { CapitalizePipe } from './../capitalize.pipe';

@Component({
  selector: 'app-myauctiontable',
  templateUrl: './myauctiontable.component.html',
  styleUrls: ['./myauctiontable.component.css'],
  inputs: ['products']
})
export class MyauctiontableComponent implements OnInit {

  product = [];
  constructor(private _productService: ProductServiceService) { }

  ngOnInit() {
    // if(this.product)
    // {
    //   console.log("h");
      
    //   let uId = this._productService.loadUserId();
    //   this.product.forEach((item, index) => {
    //     var lastBidprice = item.bid_amount;
    //     var lastBiduser = '';
    //     var lastBidTime = '';
    //     var lastBiduserId = '';
    //     var bidstatus = '';
    //     var bgClr = '';
    //     let mybid = [];
    //     item.bidders.forEach((bidder, i) => {
    //       console.log(bidder);
    //       if(bidder.amount >= lastBidprice && bidder.bid_status != 'rejected'){
    //          lastBidprice = bidder.amount;
    //         //  lastBiduser = this.users[bidder.user_id].name;
    //           lastBiduserId = bidder.user_id;
    //          lastBidTime = bidder.date_time;
    //       }
    //       if(bidder.user_id == uId){
    //         mybid.push(bidder);
    //       }
    //      // if(bidder.bid_status == "rejected")
    //     });
    //     if(lastBiduserId  == uId && item.is_bid_completed){
    //       var bidstatus = 'Winner';
    //       var bgClr = 'green';
    //     }
    //     if(lastBiduserId  != uId && item.is_bid_completed){
    //       var bidstatus = 'Participated';
    //       var bgClr = 'red';
    //     }
    //     if(lastBiduserId  == uId && !item.is_bid_completed){
    //       var bidstatus = 'Participated';
    //       var bgClr = 'green';
    //     }
    //     if(lastBiduserId  != uId && !item.is_bid_completed){
    //       var bidstatus = 'Participated';
    //       var bgClr = 'red';
    //     }
    //     this.product[index].bidstatus = bidstatus;
    //     this.product[index].mybid = mybid;
    //     this.product[index].bgClr = bgClr;
    //     this.product[index].mybid = mybid;
    //     this.product[index].topbid = lastBidprice;
    //     this.product[index].lastBiduser = lastBiduser;
    //     this.product[index].lastBidTime = lastBidTime;
    //     this.product[index].lastBiduserId = lastBiduserId;
    //     console.log(this.product);
    //   });
    // }
  }

}
