import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-card-running',
  templateUrl: './card-running.component.html',
  styleUrls: ['./card-running.component.css'],
  inputs: ['product'],
})
export class CardRunningComponent implements OnInit {
   product:any;
   amount:any;
   isError = false;
   errMsg = '';
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
     console.log(this.product);

  }
  bidbtnClicked(){
    this.validateAmount();
    console.log(this.product);
    console.log(this.amount);
  }

  validateAmount(){
    this.isError = false;
    if(Number(this.amount)){
      console.log( this.product.min_bid_rate * 1 + this.product.lastBidprice* 1 );
      if(Number(this.amount) >= ( this.product.min_bid_rate * 1 + this.product.lastBidprice* 1 )){
          let data = {
            pid : this.product._id,
            amount : Number(this.amount),
          }
           this.productService.bidProduct(data);
      }else{
        this.isError = true;
        this.errMsg = "You Can Bid Only From " + ( this.product.min_bid_rate * 1 + this.product.lastBidprice* 1 ).toFixed(2);
      }
    }else{
      this.isError = true;
      this.errMsg = "Please Enter Valid Amount";
    }
  }

}
