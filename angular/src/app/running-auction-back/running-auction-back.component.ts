import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router} from '@angular/router';
import { UserService} from '../services/user.service';
import * as socketIo from 'socket.io-client';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import { Config } from './../../../config/config';

@Component({
  selector: 'app-running-auction-back',
  templateUrl: './running-auction-back.component.html',
  styleUrls: ['./running-auction-back.component.css'],
  inputs : ["startFrom","startUpto","endFrom","endUpto"],
})
export class RunningAuctionBackComponent implements OnInit {
  products: any;
  users:object;
  winnerId : object;
  involvedUsers : any = [];
  private socket: any; 
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
    private config: Config
    
  ) {
    this.socket  = socketIo(config.socketURL);
   }

  ngOnInit() {
  //  this.picker.datePicker.setStartDate('2017-03-27');
    // this.userService.getLoggedUSerDetails().subscribe(info =>{
    //   if(info.role !="admin"){
    //     this.router.navigate(['/login']);
    //   }
    // });
    // this.startDate = new Date();
    // this.endDate = new Date();
      this.userService.getAllUsersById().subscribe(data=>{
          this.users = data;
          console.log(this.users);
      });


      
      this.socket.on('userbidreject', (data) => {
        this.getAllproduct();
      }); 

      this.socket.on('newbid', (data) => {
        this.getAllproduct();
      }) 
      
      this.socket.on('startbid', (data) => {
      
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
    console.log(this.products);
  });
  }
  updateInvolved(product){
    this.involvedUsers = product;
    // console.log(this.involvedUsers);
  }
  timeOver(){
    this.getAllproduct(); 
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
