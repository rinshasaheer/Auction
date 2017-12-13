import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductService } from './../services/product.service';
import { FilterPipe } from '../filter.pipe';
import { pro } from '../pro';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
  // pipes :[]
 
  inputs :['pros'],
  outputs : ['SelectPro'],
  //  pipes: [ProductPipe],
})
export class ProductListComponent implements OnInit {
  pros: any;
  prodata: any;
  tableview: boolean = true;
  arr1 : any;
  start_date :Date
  end_date : Date
  // private deleteProEvent = new EventEmitter();
  public SelectPro = new EventEmitter();
  constructor(private _prductService : ProductService, private router: Router, private userService : UserService ) { }

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
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="admin"){
        this.router.navigate(['/login']);
      }
    });
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

deleteProduct(pid){
  console.log(pid);
    this._prductService.deleteProduct(pid).subscribe(data1 => {
            if(data1){
              // console.log(data1);
             alert("Delete Product Successfully");
             location.reload();
             this.router.navigate(['/product-list'])
            }
      
          });
}
}
