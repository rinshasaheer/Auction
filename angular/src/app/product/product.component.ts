import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { FileUploader } from 'ng2-file-upload';
import { ProductService } from './../services/product.service';
import { UserService } from './../services/user.service';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CanActivate } from '@angular/router';
import { pro } from '../pro';
import { Router } from "@angular/router";
// import { FileUploader } from 'ng2-file-upload';
import 'rxjs/add/operator/map';

// import { FormGroup } from '@angular/forms';

// import { ProductService } from '../services/product.service';
// import { Poll } from '../poll';
// import { FormsModule, FormControl, FormGroup, Validators }   from '@angular/forms';
// import { answer } from './../answer';

import { Config } from './../../../config/config';

import { FileUploader } from 'ng2-file-upload'; // File Upload



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService, UserService]
  // providers: [ProductService]

})
export class ProductComponent implements OnInit {
  form: FormGroup;
  public uploader:FileUploader = new FileUploader({url:this.config.fileUploadURL});
  
  imageselect : Boolean =false;


 
  polls: Array<pro>;
  newproduct ={
    name : '',
    desc : '',
    bid_amount :'',
    min_bid_rate :'',
     start_date :'',
     end_date :'',
    image :''

  };


  constructor(private _prductService : ProductService,
    private _userService : UserService, 
    private router: Router,
    private config: Config
  ) { 
      

     }

  ngOnInit() {
    // this._userService.getLoggedUSerDetails().subscribe(info =>{
    //   if(info.status!=true){
    //     this.router.navigate(['/login']);
    //   }
    //   else if(info.role == "user"){
    //     this.router.navigate(['/login']);
    //   }
    // });
    this._userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="admin"){
        this.router.navigate(['/login']);
      }
    });

  }
  imageOr(){
    this.imageselect = true;
  }
  addProduct(){
console.log("image selected or not");
console.log(this.imageselect );

  if(this.imageselect ==true){

    this.uploader.uploadAll();
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      response = JSON.parse(response);
      this.newproduct.image = response.filename;
      console.log("before saving");
      console.log(this.newproduct);
      this._prductService.addProduct(this.newproduct).subscribe(data => {
        if(data){
          // console.log(this.newproduct);
          console.log(this.newproduct.image);
          
                this._userService.sendmail().subscribe(data1 => {
             
            });
    
    
           alert("Add Product Successfully");
           this.router.navigate(['/product-list']);
          //  window.location.reload();
        //  
            
        
          }else {
            alert("Error");
            console.log("error")
          }
        });
      // console.log("ImageUpload:uploaded:", item, status, JSON.parse(response));
     
    
  };
 
  }
  else if(this.imageselect ==false){
    console.log("before saving");
    this._prductService.addProduct(this.newproduct).subscribe(data => {
      if(data){
        // console.log(this.newproduct);
        console.log(this.newproduct.image);
        
              this._userService.sendmail().subscribe(data1 => {
           
          });
  
  
         alert("Add Product Successfully");
         this.router.navigate(['/product-list']);
        //  window.location.reload();
      //  
          
      
        }else {
          alert("Error");
          console.log("error")
        }
      });
  }
   
  }

  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
}

// _keyPress1(event: any) {
//   const pattern = /[a-z,A-Z,1-9  ]/;
//   let inputChar = String.fromCharCode(event.charCode);

//   if (!pattern.test(inputChar)) {
//     // invalid character, prevent input
//     event.preventDefault();
//   }
// }
datepickerOpts = {
  startDate: new Date(Date.now()),
  
  autoclose: true,
  todayBtn: 'linked',
  todayHighlight: true,
  assumeNearbyYear: true,
  format: 'd MM yyyy',
  
}

// getProducts1(){
//   this._prductService.getProducts().subscribe(data2 => {
//   console.log(data2)
//     });

// }


   
}
  

