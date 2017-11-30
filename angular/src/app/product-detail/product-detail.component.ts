import { Component, OnInit, EventEmitter } from '@angular/core';
import { pro } from '../pro';
@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  inputs :['pro'],
  outputs: ['updateProEvent', 'deleteProEvent']
  
})
export class ProductDetailComponent implements OnInit {
  pro: any;
  // tableview: boolean = false;
  private updateProEvent = new EventEmitter();
  private deleteProEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  updateProduct(){
   this.updateProEvent.emit(this.pro);
  //  window.location.reload();
  //  this.tableview = true;
  }
  deleteProduct(){
    // console.log("sdd");
    this.deleteProEvent.emit(this.pro);
   //  window.location.reload();
   //  this.tableview = true;
   }
 
}
