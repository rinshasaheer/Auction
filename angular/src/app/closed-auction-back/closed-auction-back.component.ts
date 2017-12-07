import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router} from '@angular/router';
import { UserService} from '../services/user.service';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';

// options: DatepickerOptions = {
//   minYear: 1970,
//   maxYear: 2030,
//   displayFormat: 'MMM D[,] YYYY',
//   barTitleFormat: 'MMMM YYYY',
//   firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
//   locale: frLocale
// };
@Component({
  selector: 'app-closed-auction-back',
  templateUrl: './closed-auction-back.component.html',
  styleUrls: ['./closed-auction-back.component.css']
})
export class ClosedAuctionBackComponent implements OnInit {
  products: object;
  winnerId : object;
  users:object;
  involvedUsers : any = [];
  constructor(
     private productService: ProductService,
     private userService:UserService
  ){ }


  ngOnInit() {

    this.userService.getAllUsersById().subscribe(data=>{
      this.users = data;
      console.log(this.users);
    });

    this.productService.getAllClosedProduct().subscribe(data=>{
      this.involvedUsers.bidders = [];
      this.involvedUsers.user_details = [];
      data.forEach((item, index) => {
        var lastBidprice = item.bid_amount;
        var lastBiduser = '';
        var lastBidTime = '';

        item.bidders.forEach((bidder, i) => {
          if(bidder.amount >= lastBidprice && bidder.bid_status != "rejected"){
             lastBidprice = bidder.amount;
             lastBiduser = this.users[bidder.user_id].name;
             lastBidTime = bidder.date_time;
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
    this.involvedUsers = product;
    console.log(this.involvedUsers);
  }

}
