import { Component, OnInit, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
// import { FlashMessagesService } from 'angular2-flash-messages';
import { ProductService } from './../services/product.service';
import { FilterPipe } from '../filter.pipe';
import { pro } from '../pro';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CanActivate } from '@angular/router';

import 'rxjs/add/operator/map';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import 'rxjs/add/operator/map';



import { FileUploader } from 'ng2-file-upload'; // File Upload
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService,UserService],
  // pipes :[]
 
  inputs :['pros'],
  outputs : ['SelectPro'],
  //  pipes: [ProductPipe],
})
export class ProductListComponent implements OnInit {
  showSuccess : Boolean = false;
  pros: any;
  prodata: any;
  tableview: boolean = true;
  arr1 : any;
  start_date :Date
  end_date : Date
  // private deleteProEvent = new EventEmitter();
  public SelectPro = new EventEmitter();
  form: FormGroup;
  public uploader:FileUploader = new FileUploader({url:'http://localhost:3000/products/upload'});
  imageselect : Boolean =false;
  greater : Boolean = false;
  hideModal: boolean = false;
 
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
  // constructor( private _flashMessagesService: FlashMessagesService, private _prductService : ProductService, private router: Router, private _userService : UserService ) { }
  constructor(  private _prductService : ProductService, private router: Router, private _userService : UserService ) { }
  
  ngOnInit() {

     
  

    // this.userService.getLoggedUSerDetails().subscribe(info =>{
    //   if(info.status!=true){
    //     this.router.navigate(['/login']);
    //   }
    //   else if(info.role == "user"){
    //     this.router.navigate(['/login']);
    //   }
    // });
 
    // this.arr1=[];
  this._prductService.getProducts().subscribe(data1 => {
    this.arr1 = data1;
 
    console.log(data1);
  //  data1.forEach(function(item) {
  //   this.arr1.push(item);
  //   console.log(this.arr1);
  //  });
  // this.prodata = data1;
      });
    this._userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="admin"){
        this.router.navigate(['/login']);
      }
    });



  }



onSelect(){

  // this.router.navigate(['/product-detail'+prodata.id])
 
  // this.tableview = false;

}


datepickerOpts1 = {
  startDate: new Date(Date.now()),
  
  autoclose: true,
  todayBtn: 'linked',
  todayHighlight: true,
  assumeNearbyYear: true,
  format: 'd MM yyyy',
  
}
imageOr(){
  this.imageselect = true;
}
addProduct(){


if(this.imageselect ==true){

  this.uploader.uploadAll();
  this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
    response = JSON.parse(response);
    this.newproduct.image = response.filename;
   this._prductService.addProduct(this.newproduct).subscribe(data => {
      if(data){
        if(data.start_date > data.end_date){
          this.greater =true;
          // alert('error! Start date is greater than end date');
          // this._userService.sendmail().subscribe(data1 => { });
         }
        // console.log(this.newproduct);
        
       
        else if(data.start_date <= data.end_date){
              this._userService.sendmail().subscribe(data1 => {
           
          });
  
          // this._flashMessagesService.show('Product Added Successfully!', { cssClass: 'alert-success', timeout: 1000 });
      
          // this.hideModal = true;
        //  alert("Add Product Successfully");
        this.showSuccess = true;
        setTimeout(() => {  
          this.showSuccess = false;
          window.location.reload();
          // console.log("Error created user");
        }, 1000);
      //  s
        }
      
        }else {
          alert("Error");
          console.log("error")
        }
      });
    // console.log("ImageUpload:uploaded:", item, status, JSON.parse(response));
   
  
};

}
else if(this.imageselect ==false){

  this._prductService.addProduct(this.newproduct).subscribe(data => {
    if(data){
      if(data.start_date > data.end_date){
        this.greater =true;
        // alert('error! Start date is greater than end date');
        this._userService.sendmail().subscribe(data1 => { });
       }
      // console.log(this.newproduct);
      
     
      else if(data.start_date <= data.end_date){

        // this._flashMessagesService.show('Product Added Successfully!', { cssClass: 'alert-success', timeout: 1000 });
        // this.hideModal = true;
        this.showSuccess = true;
        setTimeout(() => {  
          this.showSuccess = false;
          window.location.reload();
          // console.log("Error created user");
        }, 1000);
        //  alert("Add Product Successfully");
        //  this.router.navigate(['/product-list']);
        //  window.location.reload();
      //  this.router.navigate(['/product-list']);
      //  this.hideModal =true;
      //  jQuery("#myModal").modal("hide");
       
    //  
      }
    
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


}
