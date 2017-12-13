import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router} from '@angular/router';
import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';
import * as socketIo from 'socket.io-client';
import { UserService } from '../services/user.service';
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
  options:DatepickerOptions = {
    
        minYear: 1970,
        maxYear: 2030,
        displayFormat: 'DD-MM-YYYY',
        barTitleFormat: 'MMMM YYYY',
        firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
        locale: enLocale
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
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="admin"){
        this.router.navigate(['/login']);
      }
    });
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
}
