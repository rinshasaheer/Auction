import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProductServiceService } from './../services/product-service.service';


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
  
  constructor(private userService : UserService, private router: Router, private _productService: ProductServiceService) { }

  ngOnInit() {
    // let tmp;
    
    // this._productService.loadNotifications()
    // .subscribe(resNotifications => {
    //   this.notifications = resNotifications;
    //   console.log(resNotifications);
    //   this.highest = 0;
    //   for (let i=resNotifications.bidders.length-1; i>=0; i--) {
    //     tmp = resNotifications.bidders[i].amount;
    //     if (tmp > this.highest && resNotifications.bidders[i].bid_status != "participated") this.highest = tmp;
        
    //   }
    // });
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
    return false;
  }

}
