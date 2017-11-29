import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-closed-auction-back',
  templateUrl: './closed-auction-back.component.html',
  styleUrls: ['./closed-auction-back.component.css']
})
export class ClosedAuctionBackComponent implements OnInit {
  products: object;
  winnerId : object;
  constructor(
     private productService: ProductService
  ){ }


  ngOnInit() {
    this.productService.getAllClosedProduct().subscribe(data=>{
      console.log(data);
      this.products = data;
      if(data.bidders.length >0){
         this.winnerId = data.bidders[data.bidders.length-1].user_id;
          
      }
    });
  }

}
