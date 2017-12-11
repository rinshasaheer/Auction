import { Component, OnInit, Input } from '@angular/core';
import { product } from './../schema/product';
import { CapitalizePipe } from './../capitalize.pipe';
import { ProductServiceService } from './../services/product-service.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  inputs: ['item','startDate', 'myauction', 'closed'],
  
})
export class CardComponent implements OnInit {

  item: product;
  startDate : any;
  lowest: Number;
  highest: Number;
  sTime : any ;
  eTime: any;
  myauction: boolean;
  closed: boolean;
  myCloseStatus: boolean = false;
  upcoming: boolean = false;
  interestMatch = false;
  isTimeOver = false;
  constructor( private _productService: ProductServiceService, private userService: UserService, private router: Router) { 
  }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.status!=true){
        this.router.navigate(['/login']);
      }
      else if(info.role == "admin"){
        this.router.navigate(['/login']);
      }
    });
    this.cardAction();
  }

  timeOver(){
    //alert('time over');
    this.isTimeOver = true;
  }

  cardAction(){
    if(this.item){
      let tmp;
      if(this.myauction){
        this.highest = 0;
        for (let i=this.item.bidders.length-1; i>=0; i--) {
            tmp = this.item.bidders[i].amount;
            if (tmp > this.highest) this.highest = tmp;
            
        }
        
        if((Date.parse(this.item.end_date) - Date.parse(Date())) <= 0){
          this.myCloseStatus = true;
        }
      }
    
      if(this.startDate){
        
        this.eTime = this.item.end_date;
        let userid = JSON.parse(localStorage.getItem('user'));
        console.log(userid);
        for (let i=this.item.intrested_ids.length-1; i>=0; i--) {
          
          if (userid.id == this.item.intrested_ids[i].user_id){
            this.interestMatch = true;
          }
          
        }
      }
      if(this.closed){
        this.highest = 0;
        
        for (let i=this.item.bidders.length-1; i>=0; i--) {
          tmp = this.item.bidders[i].amount;
          if (tmp > this.highest && this.item.bidders[i].bid_status != "rejected") this.highest = tmp;
          
        }
      }
    }

  }
  updateInterested(id){
    this._productService.addInterestedCandidate(id).subscribe(data=>{ 
      console.log(data);
      if(data.success == true){
          this.interestMatch = true;
      }
    });
  }
}
