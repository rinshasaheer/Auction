import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';
 import { pro } from '../pro';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css'],
  providers : [ProductService]
 

})
export class ManageProductComponent implements OnInit {
  
 pros: Array<pro>;
 selectedPro : pro;

  constructor(private _productService : ProductService) { }

  ngOnInit() {
    
    this._productService.getProducts()
    .subscribe(resProData => this.pros = resProData);
  }

  onSelectPro(pro :any){
    this.selectedPro = pro;
    console.log(this.selectedPro);
  }


  onUpdateProEvent(pro : any){
    this._productService.updateProduct(pro)
    .subscribe(resUpdatedPro => pro = resUpdatedPro);
    this.selectedPro =null;
  };
  onDeleteProEvent(pro : any){
    //  console.log("manahe delete");
    this._productService.updateProduct(pro)
    .subscribe(resUpdatedPro => pro = resUpdatedPro);
    this.selectedPro =null;
  };


}
