import { Component, OnInit, Input } from '@angular/core';
import { product } from './../schema/product';
import { CapitalizePipe } from './../capitalize.pipe';
import { ProductServiceService } from './../services/product-service.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  inputs: ['item'],
  
})
export class CardComponent implements OnInit {

  item: product;
  // item : any;
  // highestBid: any;
  // @Input() item;
  // x: any;
  lowest: Number;
  highest: Number;
  highestBid : any ;
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
    // console.log(this.item.bidders[0].amount);
    
    let tmp;
    // this.lowest = Number.POSITIVE_INFINITY;
    this.highest = 0;
    for (let i=this.item.bidders.length-1; i>=0; i--) {
        tmp = this.item.bidders[i].amount;
        // if (tmp < this.lowest) this.lowest = tmp;
        if (tmp > this.highest && this.item.bidders[i].bid_status != "rejected") this.highest = tmp;
        
    }
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

    
    // this.highestBid = this.getHighestBid(this.item);
    // // Math.max(this.highestBid.amount);
    // console.log(this.highestBid);


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

}
