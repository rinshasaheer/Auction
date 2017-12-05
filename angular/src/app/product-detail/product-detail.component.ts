import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { pro } from '../pro';

import { CanActivate } from '@angular/router';
@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  inputs :['pro'],
  outputs: ['updateProEvent', 'deleteProEvent']
  
})
export class ProductDetailComponent implements OnInit {
  pro: any;
  form: FormGroup;
  // date1: Date = Date.now;
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
 
   //  window.location.reload();
   //  this.tableview = true;
   }
   clickMethod(name: string) {
    if(confirm("Are you sure to delete "+name)) {
      this.deleteProEvent.emit(this.pro);
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
 
}
