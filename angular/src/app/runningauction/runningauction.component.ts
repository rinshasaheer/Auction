import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { UserService} from '../services/user.service';
import { Router} from '@angular/router';
import * as socketIo from 'socket.io-client';


@Component({
  selector: 'app-runningauction',
  templateUrl: './runningauction.component.html',
  styleUrls: ['./runningauction.component.css']
})
export class RunningauctionComponent implements OnInit {
  user : any;
  users : object;
  products: any;
  product_ids: Array<String> = [];
  winnerId : object;
  involvedUsers : any = [];
  private socket: any; 
  constructor(
    private productService: ProductService,
    private userService:UserService,
    private router: Router
  ) {
    this.socket  = socketIo('http://localhost:3000');
   }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="user"){
        this.router.navigate(['/login']);
      }
    });
    this.socket.on('startbid', (data) => {
     // console.log(data);
      if(!this.product_ids.includes(data.prod_id)){
        this.productService.getProduct(data.prod_id).subscribe(data=>{
          this.products.push(data);
          this.product_ids.push(data._id);
        });
      }
      
    })

    this.userService.getLoggedUSerDetails().subscribe(data=>{
        this.user = data;
        console.log(this.user);
    });
    this.userService.getAllUsersById().subscribe(data=>{
        this.users = data;
       console.log(this.users);
    });
    this.productService.getAllrunningProduct().subscribe(data=>{
      console.log(data);
        data.forEach((item, index) => {
          this.product_ids.push(item._id);
        });
      //    var lastBidprice = item.bid_amount;
      //    var lastBiduser = '';
      //    var lastBidTime = '';
      //    var lastBiduserId = '';
 
      //    item.bidders.forEach((bidder, i) => {
      //      console.log(bidder);
      //      if(bidder.amount >= lastBidprice){
      //         lastBidprice = bidder.amount;
      //         lastBiduser = this.users[bidder.user_id].name;
      //         lastBiduserId = this.users[bidder.user_id]._id;
      //         lastBidTime = bidder.date_time;
      //      }
      //    });
      //    data[index].lastBidprice = lastBidprice;
      //    data[index].lastBiduser = lastBiduser;
      //    data[index].lastBidTime = lastBidTime;
      //    data[index].lastBiduserId = lastBiduserId;
      //    data[index].mybid = (lastBiduserId == this.user._id) ? true:false ;
      //  });
       this.products = data;
     });
  }

}
