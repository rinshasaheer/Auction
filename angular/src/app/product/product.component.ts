import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { ProductService } from './../services/product.service';
import { UserService } from './../services/user.service';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CanActivate } from '@angular/router';
import { pro } from '../pro';
import { Router } from "@angular/router";
// import { FormGroup } from '@angular/forms';

// import { ProductService } from '../services/product.service';
// import { Poll } from '../poll';
// import { FormsModule, FormControl, FormGroup, Validators }   from '@angular/forms';
// import { answer } from './../answer';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService, UserService]
  // providers: [ProductService]

})
export class ProductComponent implements OnInit {
  form: FormGroup;



 
  polls: Array<pro>;
  newproduct ={
    name : '',
    desc : '',
    bid_amount :'',
    min_bid_rate :'',
     start_date :'',
     end_date :'',
    // date_time :''

  };


  constructor(private _prductService : ProductService,private _userService : UserService, private router: Router ) { }

  ngOnInit() {


  }
  addProduct(){
    this._prductService.addProduct(this.newproduct).subscribe(data => {
    if(data){

            this._userService.sendmail().subscribe(data1 => {
         
        });


       alert("Add Product Successfully");
       this.router.navigate(['/manage-product'])
       window.location.reload();
    //  
        
    
      }else {
        alert("Error");
        console.log("error")
      }
    });

   
  }

  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
}
  
}
