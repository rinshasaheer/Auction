import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { pro } from '../pro';
import { ProductService } from './../services/product.service';
import { FileUploader } from 'ng2-file-upload'; // File Upload


import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

import { Config } from './../../../config/config';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService],
  inputs :['pro'],
  outputs: ['updateProEvent', 'deleteProEvent']
  
  
})
export class ProductDetailComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url:this.config.fileUploadURL});
  arr1= {
    name: String,
    start_date: Date,
    end_date : Date,
    image: String
    
  };

  pro: Array<any>;
  form: FormGroup;
  dateinfo : Date;
  private sub: any;
  start_date:Date;
  end_date: Date;
  start  : Boolean = false;
  end  : Boolean = false;

  // tableview: boolean = false;
  private updateProEvent = new EventEmitter();
  private deleteProEvent = new EventEmitter();

  constructor(private _prductService : ProductService, 
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private config: Config
  ) { }

  ngOnInit() {


    // this.userService.getLoggedUSerDetails().subscribe(info =>{
    //   if(info.role !="admin"){
    //     this.router.navigate(['/login']);
    //   }
    // });
  
    this.sub = this.route.params.subscribe(params => {
     // console.log('abcd' + params.id);
      this._prductService.getAProduct(params.id).subscribe(data => {
        this.arr1 = data;
        // console.log(this.arr1.start_date);
       // console.log(this.arr1.start_date);
        // startdate: Date = new Date(this.arr1.start_date.toString())
        this.start_date = new Date(this.arr1.start_date.toString());
        this.end_date = new Date(this.arr1.end_date.toString());
        // this.dateinfo= data;
      });

   });


  }

  updateProduct(arr1){
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      // console.log("ImageUpload:uploaded:", item, status, JSON.parse(response));
      response = JSON.parse(response);
      this.arr1.image = response.filename;
      console.log(this.arr1.image);
  };
    // console.log(arr1);
    this._prductService.updateProduct(arr1).subscribe(data1 => {
    
   if(arr1.start_date == undefined){
      this.start = true;
    //  alert("Bid Start time is required");

   }
  if(arr1.end_date == undefined){
     this.end = true;
    // alert("Bid End time is required");

  }
      else if(arr1.start_date != undefined)
      {
        alert("Update Product Successfully");
        this.router.navigate(['/product-list']);
      }
    
    });
   }
  //  deleteProduct(arr1){
  
  //  }
  //  clickMethod(arr1) {
  //   if(confirm("Are you sure to delete the product?")) {

  //     this._prductService.deleteProduct(arr1).subscribe(data1 => {
  //       if(data1){
  //         // console.log(data1);
  //        alert("Delete Product Successfully");
  //        this.router.navigate(['/product-list'])
  //       }
  
  //     });


  //     // this.deleteProEvent.emit(this.pro);
  //   }
  // }
  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
}

_keyPress1(event: any) {
  const pattern = /[a-z,A-Z, ]/;
  let inputChar = String.fromCharCode(event.charCode);

  if (!pattern.test(inputChar)) {
    // invalid character, prevent input
    event.preventDefault();
  }
}
datepickerOpts = {
  startDate: new Date(Date.now()),
 
  autoclose: true,
  todayBtn: 'linked',
  todayHighlight: true,
  assumeNearbyYear: true,
  format: 'd MM yyyy',
  
}





// getProduct(){
//   this._prductService.getProduct(this.newproduct).subscribe(data => {
//   if(data){

//           this._userService.sendmail().subscribe(data1 => {
       
//       });


//      alert("Add Product Successfully");
//      this.router.navigate(['/manage-product'])
//      window.location.reload();
//   //  
      
  
//     }else {
//       alert("Error");
//       console.log("error")
//     }
//   });

 
// }

}
