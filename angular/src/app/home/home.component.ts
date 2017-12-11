import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './../services/product-service.service';
import {product} from './../schema/product';  
import { Http, Headers } from '@angular/http';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : Array<product>;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="user"){
        this.router.navigate(['/login']);
      }
     
    });
  }

}
