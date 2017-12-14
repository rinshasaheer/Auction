import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver  } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router} from '@angular/router';
import { UserService} from '../services/user.service';
// import { DatepickerOptions } from 'ng2-datepicker';
// import * as enLocale from 'date-fns/locale/en';
import * as socketIo from 'socket.io-client';
import { DaterangePickerComponent } from 'ng2-daterangepicker';

import { Config } from './../../../config/config';


@Component({
  selector: 'app-closed-auction-back',
 // entryComponents: [DaterangePickerComponent],
  templateUrl: './closed-auction-back.component.html',
  styleUrls: ['./closed-auction-back.component.css']
})
export class ClosedAuctionBackComponent implements OnInit {
  products: object;
  winnerId : object;
  users:object;
  startDate:Date;
  endDate:Date;
  private socket: any; 
  involvedUsers : any = [];
  startFrom :any = '';
  startUpto  :any = '';
  endFrom :any = '';
  endUpto :any = '';
  public options: any = {
      locale: { format: 'DD-MM-YYYY' },
      alwaysShowCalendars: false,
      
  };
  public optionsEnd: any = {
      locale: { format: 'DD-MM-YYYY' },
      alwaysShowCalendars: false,
      // startDate: '24-12-2017',
      // endDate: '28-12-2017',
     // disableUntil: {year: this.currentYear, month: this.currentMonth, day: this.currentDate}
     // start: new Date('12/24/2017')
      
  };
  constructor(
     private productService: ProductService,
     private userService:UserService,
     private router: Router,
     private config: Config) { 
      

    this.socket  = socketIo(config.socketURL);
  }


  ngOnInit() {
    // this.userService.getLoggedUSerDetails().subscribe(info =>{
    //   if(info.role !="admin"){
    //     this.router.navigate(['/login']);
    //   }
    // });
   this.startDate = new Date();
   this.endDate = new Date();
    this.userService.getAllUsersById().subscribe(data=>{
      this.users = data;
      console.log(this.users);
    });

    this.socket.on('startbid', (data) => {
        this.getAllproduct();
    })
    this.socket.on('userbidreject', (data) => {
      this.getAllproduct();
    }) 
    this.getAllproduct();
    
  }

  getAllproduct(){
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

  public selectedStartDate(value: any, datepicker?: any) {
    this.startFrom =  value.start;
    this.startUpto =  value.end;
}
  public selectedEndDate(value: any, datepicker?: any) {
    this.endFrom =  value.start;
    this.endUpto =  value.end;
}

}
