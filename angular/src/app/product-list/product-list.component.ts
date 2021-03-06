import { Component, OnInit, EventEmitter, ElementRef,ViewChild} from '@angular/core';
import * as $ from 'jquery';
// import { FlashMessagesService } from 'angular2-flash-messages';
import { ProductService } from './../services/product.service';
import { FilterPipe } from '../filter.pipe';
import { pro } from '../pro';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
//import { ProductComponent } from './../product/product.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CanActivate } from '@angular/router';
//import { ProductComponent } from './../product/product.component';

import 'rxjs/add/operator/map';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import 'rxjs/add/operator/map';



import { FileUploader } from 'ng2-file-upload'; // File Upload
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
 // directives: [ProductComponent],
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService,UserService],
  // pipes :[]
 
  inputs :['pros'],
  outputs : ['SelectPro'],
  
  //  pipes: [ProductPipe],
})
export class ProductListComponent implements OnInit {
  @ViewChild('child') child:any;
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('f') f: any;
  @ViewChild('imgFile') imgFile: any;
 
  showSuccess : Boolean = false;
  pros: any;
  prodata: any;
  tableview: boolean = true;
  arr1 : any;
  start_date :Date
  end_date : Date
  btnDisbled:boolean = false;
  // private deleteProEvent = new EventEmitter();
  public SelectPro = new EventEmitter();
  //  myEvent = new EventEmitter();
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

     
  
    this._userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="admin"){
        this.router.navigate(['/login']);
      }
    });
 
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
  // console.log("here");
  this.btnDisbled = true
  if(this.newproduct.start_date > this.newproduct.end_date){
    this.greater =true;
    this.btnDisbled = false
  }else{
    this.greater =false;
    if(this.imageselect ==true){
      this.uploader.uploadAll();
      this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      response = JSON.parse(response);
      this.newproduct.image = response.filename;
      
        this._prductService.addProduct(this.newproduct).subscribe(data1 => {
          if(data1){
            this.showSuccess = true;
            //this.myEvent.emit(null)
            //app-product.loadData();
            this.child.loadData();
            setTimeout(() => {  
              this.closeBtn.nativeElement.click();
              this.showSuccess = false;
              this.newproduct ={
                name : '',
                desc : '',
                bid_amount :'',
                min_bid_rate :'',
                 start_date :'',
                 end_date :'',
                image :''
            
              };
              this.imageselect = false;
              this.imgFile.nativeElement.value = '';
              this.f.submitted = false;
              this.btnDisbled = false;
              //ProductComponent.loadData();
            // window.location.reload();
              // console.log("Error created user");
            }, 1000);
            
         }else {
              alert("Error");
              console.log("error")
            }
          }); 
          console.log( this.greater)
  
  };
  }
      else if(this.imageselect ==false){
   
    if(this.newproduct.start_date > this.newproduct.end_date){
      this.greater =true;
      this.btnDisbled = false
      // this._userService.sendmail().subscribe(data => { });
     }
  
    
   
    else if(this.newproduct.start_date <= this.newproduct.end_date){
      this.newproduct.image = '';
      this.greater =false;
      this._prductService.addProduct(this.newproduct).subscribe(data => {
        if(data){
          this.showSuccess = true;
          this.child.loadData();
          setTimeout(() => {  
    
            this.closeBtn.nativeElement.click();
            this.showSuccess = false;
            this.newproduct ={
              name : '',
              desc : '',
              bid_amount :'',
              min_bid_rate :'',
               start_date :'',
               end_date :'',
              image :''
          
            };
            this.imageselect = false;
            this.imgFile.nativeElement.value = '';
            this.f.submitted = false;
            this.btnDisbled = false;
            // this.imageselect = false;
            // this.imgFile.nativeElement.value = '';
            // this.f.submitted = false;
            // this.btnDisbled = false;
           // window.location.reload();
            // console.log("Error created user");
          }, 1000);
          // window.location.reload();
       }else {
          this.btnDisbled = false;
            //alert("Error");
            console.log("error")
          }
        });
     
      //  alert("Add Product Successfully");
      //  this.router.navigate(['/product-list']);
      //  window.location.reload();
    //  this.router.navigate(['/product-list']);
    //  this.hideModal =true;
    //  jQuery("#myModal").modal("hide");
     
  //  
    }
  }
  }

 
}

_keyPress(event: any) {
  const pattern = /[0-9/.]/;
  let inputChar = String.fromCharCode(event.charCode);
  if (!pattern.test(inputChar) && event.charCode != 0) {
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

// deleteProduct(pid){
//   console.log(pid);
//     this._prductService.deleteProduct(pid).subscribe(data1 => {
//             if(data1){
//               // console.log(data1);
//              alert("Delete Product Successfully");
//              location.reload();
//              this.router.navigate(['/product-list'])
//             }
      
//           });
// }
}
