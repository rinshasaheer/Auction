import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ProductService} from '../services/product.service';
import {Router} from '@angular/router';
import { Config } from './../../../config/config';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  count : any;
  info :Array<any>;
  user_id : any;
  userInfo : any;
  private socket: any;
  showSuccess : Boolean = false;
  
  constructor(
    private userService: UserService,
    private productService: ProductService,
    private router: Router,
    private config: Config
  ) {   this.socket = socketIo(config.socketURL);}

  ngOnInit() {
    let details= [];
    this.info = [];
    this.count = 0;
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="admin"){
        this.router.navigate(['/login']);
      }else{
      // this.userInfo = info;
      this.getNotification();
      }
    });
    
    
    this.socket.on('admin_notification', (data) => {
      // if(this.userInfo._id == data.user_id){
        this.getNotification();
      // }
     });
  
}

getNotification(){
  // console.log("hw");
  // this.info = [];
  this.productService.getProducts().subscribe(data3 => {   
    console.log(data3);
      data3.forEach(element => {
        // console.log(element.admin_notification.user_id);
        if( element.admin_notification.is_viewed != true && element.admin_notification.user_id){
          this.info.push(element);
          this.count++;
          // console.log(this.info);
        
        }
        // console.log(this.count)
        
      });
  });
}

  logout(){
  this.userService.logout();
  this.router.navigate(['/login']);
  return false;
  }
}
