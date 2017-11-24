import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-closed-auction',
  templateUrl: './closed-auction.component.html',
  styleUrls: ['./closed-auction.component.css'],
  providers : [ProductService]
})
export class ClosedAuctionComponent implements OnInit {
  products: object;
  constructor(
     private productService: ProductService
  ){ }

  ngOnInit() {
    this.productService.getAllClosedProduct().subscribe(data=>{
      console.log(data);
      this.products = data;
    });
  }

}
