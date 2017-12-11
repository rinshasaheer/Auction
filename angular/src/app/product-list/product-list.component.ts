import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductService } from './../services/product.service';
import { FilterPipe } from '../filter.pipe';
import { pro } from '../pro';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // pipes :[]
 
  inputs :['pros'],
  outputs : ['SelectPro'],
  //  pipes: [ProductPipe],
})
export class ProductListComponent implements OnInit {
  pro: any;
  tableview: boolean = true;
  // private deleteProEvent = new EventEmitter();
  public SelectPro = new EventEmitter();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="admin"){
        this.router.navigate(['/login']);
      }
    });
  }

onSelect(prod : pro){
  this.SelectPro.emit(prod);
  this.tableview = false;

}

deletePro(prod : pro){
  this.SelectPro.emit(prod);
  this.tableview = false;
}
}
