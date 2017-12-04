import { Component, OnInit } from '@angular/core';
import { product } from './../schema/product';
import { ProductServiceService } from './../services/product-service.service';

@Component({
  selector: 'app-upcomingauctions',
  templateUrl: './upcomingauctions.component.html',
  styleUrls: ['./upcomingauctions.component.css']
})
export class UpcomingauctionsComponent implements OnInit {

  products: Array<product>;    
  existStatus: boolean = false;
  constructor(private _productService: ProductServiceService) { }

  ngOnInit() {
    this._productService.loadUpcomingProduct()
    .subscribe(resProducts => {
      this.products = resProducts;
      console.log(resProducts);
      if(resProducts.length > 0){
        this.existStatus = true;
      }
    });
  }

}
