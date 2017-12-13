import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router} from '@angular/router';
// import { DatepickerOptions } from 'ng2-datepicker';
// import * as enLocale from 'date-fns/locale/en';
import * as socketIo from 'socket.io-client';
import { UserService } from '../services/user.service';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import { Config } from './../../../config/config';

@Component({
  selector: 'app-upcoming-auction-back',
  templateUrl: './upcoming-auction-back.component.html',
  styleUrls: ['./upcoming-auction-back.component.css']
})
export class UpcomingAuctionBackComponent implements OnInit {
  products: object;
  startDate:Date;
  endDate:Date;
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
    private userService: UserService,
    private router: Router,
    private config: Config
  ) {

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
    this.getAllproduct(); 
    this.socket.on('upcomingnewbid', (data) => {
      this.getAllproduct(); 
    }) 
  }

  getAllproduct(){
    this.productService.getAllUpcomingProduct().subscribe(data=>{
      console.log(data);
      this.products = data;
    });
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
