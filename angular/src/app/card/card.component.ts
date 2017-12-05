import { Component, OnInit, Input } from '@angular/core';
import { product } from './../schema/product';
import { CapitalizePipe } from './../capitalize.pipe';
import { ProductServiceService } from './../services/product-service.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  inputs: ['item','startDate', 'myauction', 'closed'],
  
})
export class CardComponent implements OnInit {

  item: product;
  startDate : any;
  // highestBid: any;
  // @Input() item;
  // x: any;
  lowest: Number;
  highest: Number;
  sTime : any ;
  eTime: any;
  myauction: boolean;
  closed: boolean;
  myCloseStatus: boolean = false;
  upcoming: boolean = false;
  // itemStatus: boolean = true;
  constructor( private _productService: ProductServiceService) { 
    // this.x = this.item; 
    // console.log(this.x);
  }

  ngOnInit() {
    // let item : any;
    // this.item = item;
    // console.log(this.item);
  // this.highestBid = this.getHighestBid(this.item);
  if(this.item){
    // console.log(this.myauction);
    
    let tmp;
    // this.lowest = Number.POSITIVE_INFINITY;
    
    // if(this.item.length == 0){
    //   this.itemStatus = false;
    // }
    // console.log(this.highest);
    // this.item.bidders.forEach(element => {
    //   tmp = element.amount;
    //   if(this.highest > tmp){
    //     tmp
    //   }
    // });
    if(this.myauction){
      this.highest = 0;
      for (let i=this.item.bidders.length-1; i>=0; i--) {
          tmp = this.item.bidders[i].amount;
          // if (tmp < this.lowest) this.lowest = tmp;
          if (tmp > this.highest) this.highest = tmp;
          
      }
      
      // let date2: string = Date();
      // let diffMins: any = Date.parse(this.item.end_date) - Date.parse(date2);
      // console.log(Date.parse(this.item.end_date) - Date.parse(Date()));
      if((Date.parse(this.item.end_date) - Date.parse(Date())) <= 0){
        this.myCloseStatus = true;
      }
    }
    
    // this.highestBid = this.getHighestBid(this.item);
    // // Math.max(this.highestBid.amount);
    // console.log(this.highestBid);
    if(this.startDate){
      // let date2: string = Date();
      // let diffMins: any = Date.parse(this.startDate) - Date.parse(date2);
      // this.dayTime = diffMins / 1000 / 60 / 60;
      // console.log(this.dayTime);
      
      this.eTime = this.item.end_date;
    }
    if(this.closed){
      this.highest = 0;
      
      for (let i=this.item.bidders.length-1; i>=0; i--) {
        tmp = this.item.bidders[i].amount;
        // if (tmp < this.lowest) this.lowest = tmp;
        if (tmp > this.highest && this.item.bidders[i].bid_status != "rejected") this.highest = tmp;
        
    }
    }

    

  }
  

  }

  getHighestBid(o){
    // Math.max.apply(Math,o.map(function(o){return o.y;}))
    // console.log(o);
    // var maxValue = Math.max.apply(Math, tmp);
    // var tmp = o.map(function(o) {
    //   return o.amount;
    // });
    // console.log(maxValue);

    // o.sort(function(a, b){return a.value-b.value});
  }

  updateInterested(id){
    this._productService.addInterestedCandidate(id).subscribe(data=>{ 
      console.log(data);
    });
  }
}
