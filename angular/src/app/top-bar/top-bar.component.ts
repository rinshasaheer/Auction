import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ProductService} from '../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  count : any;
  info :Array<any>;
  user_id : any;
  
  constructor(
    private userService: UserService,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="admin"){
        this.router.navigate(['/login']);
      }
    });
    let details= [];
    this.info = [];
    this.count = 0;
    this.productService.getProducts().subscribe(data3 => {   
      data3.forEach(element => {
        // console.log(element);
        if(element.admin_notification.user_id && element.admin_notification.is_viewed == false ){
          this.info.push(element);
          this.count++;
          console.log(this.info);
        }
      });
  });
}


  logout(){
  this.userService.logout();
  this.router.navigate(['/login']);
  return false;
  }
}
