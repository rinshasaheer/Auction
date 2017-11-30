import { Component, OnInit } from '@angular/core';
import { product } from './../schema/product';
import { ProductServiceService } from './../product-service.service';

@Component({
  selector: 'app-finishedauction',
  templateUrl: './finishedauction.component.html',
  styleUrls: ['./finishedauction.component.css'],
  inputs: ['products']
})
export class FinishedauctionComponent implements OnInit {

  products: Array<product>;
  existStatus: boolean = false;
  constructor(private _productService: ProductServiceService) { }

  ngOnInit() {
    this._productService.loadClosedProduct()
    .subscribe(resProducts => {
      this.products = resProducts;
      // console.log(resProducts);
      if(resProducts.length > 0){
        this.existStatus = true;
      }
      console.log(this.existStatus);
    });
    // console.log(this.products);
  }

}
