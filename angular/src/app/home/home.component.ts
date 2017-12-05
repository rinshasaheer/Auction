import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './../services/product-service.service';
import {product} from './../schema/product';  
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : Array<product>;
  constructor() { }

  ngOnInit() {
    
  }

}
