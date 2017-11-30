import { Component, OnInit } from '@angular/core';
import { product } from './../schema/product';
import { ProductServiceService } from './../services/product-service.service';

@Component({
  selector: 'app-myauctions',
  templateUrl: './myauctions.component.html',
  styleUrls: ['./myauctions.component.css']
})
export class MyauctionsComponent implements OnInit {

  products: Array<product>;    
  existStatus: boolean = false;
  constructor(private _productService: ProductServiceService) { }

  ngOnInit() {
    this._productService.loadMyAuctionProduct()
    .subscribe(resProducts => {
      this.products = resProducts;
      console.log(resProducts);
      if(resProducts.length > 0){
        this.existStatus = true;
      }
    });
  }

}
