import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProductServiceService } from './../services/product-service.service';
import { ProductService } from './../services/product.service';
import * as socketIo from 'socket.io-client';
import { Config } from './../../../config/config';
import { CapitalizePipe } from './../capitalize.pipe';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  // inputs: ['page']
})
export class NavigationComponent implements OnInit {

  brand_logo: String = "brand.png";
  notifications: any;  
  highest: Number;
  details : any;
  countNumber : any;
  info :Array<any>;
  count : Boolean = true;
  userInfo : any;
  private socket: any;
  loading = true;

  constructor(private userService : UserService, 
    private router: Router, 
    private _productService: ProductServiceService, 
    private productService: ProductService,
    private config: Config) {
    this.socket = socketIo(config.socketURL);
   }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="user"){
        this.router.navigate(['/login']);
      }else{
        // console.log(info);
        this.userInfo = info;
        this.loading = false;
      }
    });
    this.getNotification();
    this.socket.on('notification', (data) => {
      if(this.userInfo._id == data.user_id){
        this.getNotification();
      }
     });
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
    return false;
  }

  getNotification(){
    this.info = [];
    this.countNumber = 0;
    this.userService.getLoggedUSerDetails().subscribe(data3 => {
      this.productService.getNotif(data3._id).subscribe(data4 => {
          // console.log(data4);
        data4.forEach(element => {
          this.countNumber++;
          this.info.push(element);
          console.log(this.info);
          if(this.info==null){
            this.count = false;
          }
        });
        });
        
    });
  }

}
