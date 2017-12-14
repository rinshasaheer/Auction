import { Component,ViewChild,OnInit} from '@angular/core';
// import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
// import { FileUploader } from 'ng2-file-upload';
import { ProductService } from './../services/product.service';
import { UserService } from './../services/user.service';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import { CanActivate } from '@angular/router';
import { pro } from '../pro';
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
export class ProductComponent {
  pid :any;
  DeleteSuccess : Boolean = false;
  displayedColumns = [ 'name','image','amount','rate','startdate','enddate','description','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private productservice: ProductService, private router: Router,private _userService : UserService) {
    // Create 100 users
    

  }
ngOnInit() {
  this._userService.getLoggedUSerDetails().subscribe(info =>{
    if(info.role !="admin"){
      this.router.navigate(['/login']);
    }
  });

  this.loadData();
}

loadData(){
  //console.log('loading table....');
  const users: any[] = [];
  this.productservice.getProducts().subscribe(data=>{
      data.forEach((item, index) => {
        users.push({
        id :item._id,
        name: item.name,
        image : item.image,
        bid_amount : item.bid_amount,
        min_bid_rate :item.min_bid_rate,
        start_date :item.start_date,
        end_date :item.end_date,
        desc:item.desc


      
      });
      });
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
});
}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  deleteProduct(pid){
    console.log(pid);
      this.productservice.deleteProduct(pid).subscribe(data1 => {
              if(data1){
                // console.log(data1);
                
                setTimeout(() => {  
                  this.DeleteSuccess = true;
                  window.location.reload();
                  // console.log("Error created user");
                }, 1000);
              //  alert("Delete Product Successfully");
              // window.location.reload();
              //  this.router.navigate(['/product-list'])
          
                
      
               
              }
        
            });
  }
  product_det(id){
    this.pid = id;
  }
}

