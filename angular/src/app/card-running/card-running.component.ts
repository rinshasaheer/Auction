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
   btnLabel = 'Bid Now';
   btnClass = 'btn-primary';
   amount:any;
   formatedAmount:any;
   isError = false;
   isSuccess = false;
   msg = '';
   btnDisbled:boolean = false;
   isTimeOver = false;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
     console.log(this.product);
     if(this.product.mybid){
      this.btnDisbled = true;
      this.formatedAmount = this.product.lastBidprice
      this.btnLabel = 'Your Bid On Progress';
      this.btnClass = 'btn-success';
      console.log(this.formatedAmount);
     }
  }


  bidbtnClicked(){
    this.btnDisbled = true;
    
    this.validateAmount();
    console.log(this.product);
    console.log(this.amount);
    if(!this.isError){
      this.formatedAmount = this.amount;
      let data = {
        pid : this.product._id,
        amount : Number(this.amount),
      }
       this.productService.bidProduct(data).subscribe(data=>{ 
         console.log(data);
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

  validateAmount(){
    this.isError = false;
    if(Number(this.amount)){
      console.log( this.product.min_bid_rate * 1 + this.product.lastBidprice* 1 );
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
