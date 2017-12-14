import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { ProductServiceService } from './../services/product-service.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import { Config } from './../../../config/config'
import { CapitalizePipe } from './../capitalize.pipe';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
})
export class MaterialComponent implements OnInit {
  existStatus = false;
  authUser: any;
  product : any;
  stat = false;
  displayedColumns = ['name', 'mybid', 'topbid', 'status'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _productService: ProductServiceService, 
    private userService: UserService, 
    private router: Router,
    private config: Config) {
    // Create 100 users
    
    // for (let i = 1; i <= 100; i++) { users.push(this.createNewUser(i)); }

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
    // console.log("f");
  }

  ngOnInit(){
    this.loadAuctions();
    const users: any = [];
    
    // this.product.forEach((item, index) => {

    //   this.product.push({
    //   name: item.name,
    //   status: item.image
    // });
    // });

  }
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


 loadAuctions(){
    this.loadUserId();
    this._productService.loadMyAuctionProduct()
    .subscribe(resProducts => {
     this.product = resProducts;
    //   console.log('fetch all my product');
      console.log(resProducts);
      if(this.product == ''){
        this.existStatus = true;

      }
      console.log(this.existStatus);
      this.product = resProducts;
        let uId = this._productService.loadUserId();
      this.product.forEach((item, index) => {
        var lastBidprice = item.bid_amount;
        var lastBiduser = '';
        var lastBidTime = '';
        var lastBiduserId = '';
        var bidstatus = '';
        var bgClr = '';
        let mybid = [];
        item.bidders.forEach((bidder, i) => {
          // console.log(bidder);
          if(bidder.amount >= lastBidprice && bidder.bid_status != 'rejected'){
             lastBidprice = bidder.amount;
            //  lastBiduser = this.users[bidder.user_id].name;
              lastBiduserId = bidder.user_id;
             lastBidTime = bidder.date_time;
          }
          if(bidder.user_id == uId){
            mybid.push(bidder);
          }
         // if(bidder.bid_status == "rejected")
        });
        if(lastBiduserId  == uId && item.is_bid_completed){
          var bidstatus = 'Winner';
          var bgClr = '#00ab5d';
        }
        if(lastBiduserId  != uId && item.is_bid_completed){
          var bidstatus = 'Participated';
          var bgClr = '#da1515';
        }
        if(lastBiduserId  == uId && !item.is_bid_completed){
          var bidstatus = 'Participated';
          var bgClr = '#00ab5d';
        }
        if(lastBiduserId  != uId && !item.is_bid_completed){
          var bidstatus = 'Participated';
          var bgClr = '#da1515';
        }
        this.product[index].bidstatus = bidstatus;
        this.product[index].mybid = mybid;
        this.product[index].bgClr = bgClr;
        this.product[index].mybid = mybid;
        this.product[index].topbid = lastBidprice;
        this.product[index].lastBiduser = lastBiduser;
        this.product[index].lastBidTime = lastBidTime;
        this.product[index].lastBiduserId = lastBiduserId;
      });
      this.dataSource = new MatTableDataSource(this.product);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // console.log(this.product);
      this.stat = true;
      
    });
    
  }
  
  loadUserId(){
    this.authUser = JSON.parse(localStorage.getItem('user'));
    return this.authUser.id;
  }




  // createNewUser(id: number): UserData {
  //   // const name =
  //   //     NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
  //   //     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  
  //   return {
  //     id: id.toString(),
  //     Product: id.toString(),
  //     YourBids: Math.round(Math.random() * 100).toString(),
  //     TopBid: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  //   };
  // }




}


/** Builds and returns a new User. */


/** Constants used to fill up our data base. */
// const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
//   'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
// const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
//   'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
//   'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

// export interface UserData {
//   name: string;
//   status: string;
// }





























/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */