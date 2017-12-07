import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProductServiceService } from './../services/product-service.service';
import { ProductService } from './../services/product.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  // inputs: ['page']
})
export class NavigationComponent implements OnInit {

  brand_logo: String = "brand.png";
  notifications: any;  
  highest: Number;
  details : any;
  count : Boolean = true;
  constructor(private userService : UserService, private router: Router, private _productService: ProductServiceService, private productService: ProductService) { }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(data3 => {
      this.productService.getNotif(data3._id).subscribe(data4 => {
        this.details = data4;
        if(data4==null){
          this.count = false;
        }
      })
    });
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
    return false;
  }

}
