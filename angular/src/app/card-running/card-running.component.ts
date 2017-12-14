import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import * as socketIo from 'socket.io-client';
import {Config} from './../../../config/config' 

@Component({
  selector: 'app-card-running',
  templateUrl: './card-running.component.html',
  styleUrls: ['./card-running.component.css'],
  inputs: ['product','users','user'],
})
export class CardRunningComponent implements OnInit {
   user:any;
   users:any;
   product:any;
   btnLabel = 'Bid Now';
   btnClass = 'btn-primary';
   amount:any;
   formatedAmount:any;
   isError = false;
   isSuccess = false;
   msg = '';
   btnDisbled:boolean = false;
   isTimeOver = false;
   private socket: any; 
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
      if(info.role !="user"){
        this.router.navigate(['/login']);
      }else{
        this.user = info;
        this.getlastbidder();
      }
    });
    this.socket.on('newbid', (data) => {
     // console.log(data);
      if(this.product._id == data.prod_id){
        this.productService.getProduct(data.prod_id).subscribe(data=>{
          this.product = data;
          this.getlastbidder();
        });
      }
    })   
   //  console.log(this.product);
   
        
      
     
  }

  getlastbidder(){
    var lastBidprice = this.product.bid_amount;
    var lastBiduser = '';
    var lastBidTime = '';
    var lastBiduserId = '';

    this.product.bidders.forEach((bidder, i) => {
     // console.log(bidder);
      if(bidder.amount >= lastBidprice){
         lastBidprice = bidder.amount;
         lastBiduser = this.users[bidder.user_id].name;
         lastBiduserId = this.users[bidder.user_id]._id;
         lastBidTime = bidder.date_time;
      }
    });
    this.product.lastBidprice = lastBidprice;
    this.product.lastBiduser = lastBiduser;
    this.product.lastBidTime = lastBidTime;
    this.product.lastBiduserId = lastBiduserId;
    this.product.mybid = (lastBiduserId == this.user._id) ? true:false ;
    if(this.product.mybid){
      this.btnDisbled = true;
      this.formatedAmount = this.product.lastBidprice
      this.btnLabel = 'Your Bid On Progress';
      this.btnClass = 'btn-success';
     // console.log(this.formatedAmount);
     }else{
      this.btnDisbled = false;
      this.formatedAmount = '';
      this.btnLabel = 'Bid Now';
      this.btnClass = 'btn-primary';
     }
  }


  bidbtnClicked(){
    this.btnDisbled = true;
    
    this.validateAmount();
 //   console.log(this.product);
  //  console.log(this.amount);
    if(!this.isError){
      this.formatedAmount = this.amount;
      let data = {
        pid : this.product._id,
        amount : Number(this.amount),
      }
       this.productService.bidProduct(data).subscribe(data=>{ 
    //     console.log(data);
         this.msg = data.msg;
         if(data.success){
            this.isSuccess = true;
            this.formatedAmount = '';
            this.product.lastBidprice = this.amount;
            this.product.lastBidprice = this.amount;
            this.btnLabel = 'Your Bid On Progress';
            this.btnClass = 'btn-success';
         }else{
          this.isError = true;
         
         }
       });
    }else{
      this.btnDisbled = false;
    }
    setTimeout(()=>{ 
      this.isError = false;
      this.isSuccess = false;
      this.msg = '';
     }, 3000);
  }

  onKeydownEvent(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
        this.bidbtnClicked();
    }
 }
  validateAmount(){
    this.isError = false;
    if(Number(this.amount)){
     // console.log( this.product.min_bid_rate * 1 + this.product.lastBidprice* 1 );
      if(Number(this.amount) < ( this.product.min_bid_rate * 1 + this.product.lastBidprice* 1 )){
        this.isError = true;
        this.msg = "You Can Bid Only From " + ( this.product.min_bid_rate * 1 + this.product.lastBidprice* 1 ).toFixed(2);
      }
    }else{
      this.isError = true;
      this.msg = "Please Enter Valid Amount";
      setTimeout(()=>{ 
        this.isError = false;
        this.msg = '';
       }, 3000);
    }
  }

  timeOver(){
    //alert('time over');
    this.isTimeOver = true;
  }

}
