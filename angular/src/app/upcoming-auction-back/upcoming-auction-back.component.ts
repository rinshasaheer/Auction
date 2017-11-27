import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-upcoming-auction-back',
  templateUrl: './upcoming-auction-back.component.html',
  styleUrls: ['./upcoming-auction-back.component.css']
})
export class UpcomingAuctionBackComponent implements OnInit {
  products: object;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getAllUpcomingProduct().subscribe(data=>{
      console.log(data);
      this.products = data;
      if(data.bidders.length >0){
          data.bidders[data.bidders.length-1]
          
      }
    });
  }

}
