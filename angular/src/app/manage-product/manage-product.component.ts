import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from './../services/product.service';
 import { pro } from '../pro';
 import { Router } from "@angular/router";
 import {UserService} from '../services/user.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css'],
  providers : [ProductService]
 

})
export class ManageProductComponent implements OnInit {
  
 pros: Array<pro>;
 selectedPro : pro;

  constructor(private _productService : ProductService ,private router: Router, private userService: UserService,) { }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.status!=true){
        this.router.navigate(['/login']);
      }
      else if(info.role == "user"){
        this.router.navigate(['/login']);
      }
    });
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
    alert('Successfully Updated');
    this.router.navigate(['/manage-product']);
    window.location.reload();

  };
  onDeleteProEvent(pro : any){
    //  console.log("manahe delete");
    this._productService.deleteProduct(pro)
    .subscribe(resDeletedPro => pro = resDeletedPro);
    this.selectedPro =null;
    this.router.navigate(['/manage-product']);
    window.location.reload();
  };


}
